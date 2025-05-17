import config from '@payload-config'
import { getPayload } from 'payload'

import { NextResponse, NextRequest } from 'next/server'

const VALID_LOCALES = ['en', 'pl'] as const

type TypedLocale = (typeof VALID_LOCALES)[number] | 'all'

type Params = { slug: string }

export const GET = async (req: NextRequest, { params }: { params: Promise<Params> }): Promise<NextResponse> => {

    try {

        const { searchParams } = new URL(req.url)

        let locale = searchParams.get('locale') as TypedLocale

        if (!VALID_LOCALES.includes(locale as unknown as (typeof VALID_LOCALES)[number])) {
            locale = 'en'
        }

        const { slug } = await params

        const payload = await getPayload({ config })

        const { docs: [post] } = await payload.find({
            collection: 'posts',
            where: {
                slug: { equals: slug },
                _status: { equals: 'published' },
                language: { equals: locale }
            },
            locale: locale,
            select: {
                title: true,
                slug: true,
                language: true,
                image: true,
                author: true,
                categories: true,
                createdAt: true,
                updatedAt: true,
                blocks: true
            },
            limit: 1,
            pagination: false
        })

        if (!post) return NextResponse.json({ error: { name: 'NotFound' } }, { status: 404 })

        return NextResponse.json({ data: { post } }, { status: 200 })

    } catch (error) {

        console.error('error', error)

        return NextResponse.json({ error: { name: 'ServerError' } }, { status: 500 })

    }
}
