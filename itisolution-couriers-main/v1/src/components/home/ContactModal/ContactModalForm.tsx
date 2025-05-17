import styles from './contact-modal.module.scss'

import TextField from '@/components/ui/TextField'
import TextArea from '@/components/ui/TextArea'
import { ButtonPrimary } from '@/components/ui/Button'

import Turnstile, { useTurnstile } from 'react-turnstile'

import { sendEmail } from '@/lib/api/cms'

import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import { FormEvent, useCallback, useState } from 'react'

const ContactModalForm = ({ email }: { email?: string }) => {

    const locale = useLocale()

    const turnstile = useTurnstile()

    const translation = useTranslations('Home.ContactModal')

    const [loading, setLoading] = useState<boolean>(false)
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

    const handleTurnstileVerify = useCallback((token: string) => {

        setTurnstileToken(token)

    }, [])

    const handleTurnstileExpire = useCallback(() => {

        setTurnstileToken(null)

    }, [])

    const handleForm = useCallback(async (event: FormEvent) => {

        event.preventDefault()

        if (loading || !turnstileToken) return

        setLoading(true)

        try {

            const formData = new FormData(event.currentTarget as HTMLFormElement)

            const response = await sendEmail({ locale }, formData)

            if ('error' in response) {
                console.log('error')
                return
            }


            const { data } = response

            console.log(data)

        } finally {

            setLoading(false)
            setTurnstileToken(null)
            turnstile.reset()

        }

    }, [locale, turnstile, loading, turnstileToken])

    return (
        <form className={styles.form} onSubmit={handleForm} autoComplete="off" spellCheck="false">

            <div className={styles.formFields}>

                <TextField
                    label={translation('Email')}
                    input={{
                        name: 'email',
                        type: 'email',
                        required: true,
                        defaultValue: email,
                        placeholder: translation('Email')
                    }}
                />

                <TextField
                    label={translation('FirstName')}
                    input={{
                        name: 'firstName',
                        type: 'text',
                        minLength: 2,
                        maxLength: 72,
                        required: true,
                        placeholder: translation('FirstName')
                    }}
                />

                <TextField
                    label={translation('LastName')}
                    input={{
                        name: 'lastName',
                        type: 'text',
                        minLength: 2,
                        maxLength: 72,
                        required: true,
                        placeholder: translation('LastName')
                    }}
                />

                <TextArea
                    label={translation('MessageContent')}
                    textarea={{
                        name: 'content',
                        minLength: 15,
                        maxLength: 3072,
                        required: true,
                        placeholder: translation('MessageContent')
                    }}
                />

            </div>

            <Turnstile
                refreshExpired="auto"
                onExpire={handleTurnstileExpire}
                onVerify={handleTurnstileVerify}
                sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
            />

            <ButtonPrimary type="submit" disabled={!turnstileToken} loading={loading}>
                {translation('ButtonText')}
            </ButtonPrimary>

        </form>
    )
}

export default ContactModalForm