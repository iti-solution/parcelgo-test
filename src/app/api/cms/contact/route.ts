import config from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as yup from 'yup'

const schema = yup.object({

  email: yup.string().email().required(),

  firstName: yup.string().min(2).max(72).required(),

  lastName: yup.string().min(2).max(72).required(),

  content: yup.string().min(15).max(3072).required(),

  'cf-turnstile-response': yup.string().required()

})

export const POST = async (request: NextRequest): Promise<NextResponse> => {

  try {

    const formData = await request.formData()

    const formValues = Object.fromEntries(formData)

    const isValid = await schema.validate(formValues).catch(() => null)

    if (!isValid) return NextResponse.json({ error: { name: 'ValidationError' } }, { status: 400 })

    const { 'cf-turnstile-response': turnstileToken, email, firstName, lastName, content } = formValues

    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || '',
        response: turnstileToken.toString(),
        remoteip: request.headers.get('CF-Connecting-IP') || request.headers.get('x-real-ip') || ''
      })
    })

    const turnstileData = await turnstileResponse.json()

    if (!turnstileData.success) {
      return NextResponse.json({ error: { name: 'TurnstileVerificationFailed' } }, { status: 400 })
    }

    const payload = await getPayload({ config })

    await payload.sendEmail({
      to: process.env.SMTP_RECIPIENT,
      from: `${firstName} ${lastName} <${email}>`,
      subject: `[ParcelGO] Nowa wiadomość od ${firstName} ${lastName}`,
      html: content,
      replyTo: email
    })

    return NextResponse.json({ data: { success: true } }, { status: 200 })
  } catch (error) {
    console.error('error', error)
    return NextResponse.json({ error: { name: 'ServerError' } }, { status: 500 })
  }
}
