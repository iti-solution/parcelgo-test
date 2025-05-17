import config from '@payload-config'
import { getPayload } from 'payload'

import { NextRequest, NextResponse } from 'next/server'

const VALID_LOCALES = ['en', 'pl'] as const

type TypedLocale = (typeof VALID_LOCALES)[number] | 'all'

export const GET = async (req: NextRequest): Promise<NextResponse> => {

    try {

        const { searchParams } = new URL(req.url)

        let locale = searchParams.get('locale') as TypedLocale

        if (!VALID_LOCALES.includes(locale as unknown as (typeof VALID_LOCALES)[number])) {
            locale = 'en'
        }

        const payload = await getPayload({ config })

        const categories = await payload.find({
            locale: locale,
            collection: 'categories',
            pagination: false
        })

        return NextResponse.json({ data: { categories: categories.docs } }, { status: 200 })

    } catch (error) {

        console.error('error', error)

        return NextResponse.json({ error: { name: 'ServerError' } }, { status: 500 })

    }
}
