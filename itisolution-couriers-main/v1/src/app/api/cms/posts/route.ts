import config from '@payload-config'
import { getPayload } from 'payload'

import { NextRequest, NextResponse } from 'next/server'

const VALID_LOCALES = ['en', 'pl'] as const

type TypedLocale = (typeof VALID_LOCALES)[number] | 'all'

export const GET = async (req: NextRequest): Promise<NextResponse> => {

    try {

        const { searchParams } = new URL(req.url)

        const page = searchParams.get('page')

        const categories = searchParams.get('categories')

        let locale = searchParams.get('locale') as TypedLocale

        if (!VALID_LOCALES.includes(locale as unknown as (typeof VALID_LOCALES)[number])) {
            locale = 'en'
        }

        const payload = await getPayload({ config })

        const { docs: categoryDocs } = await payload.find({
            collection: 'categories',
            where: {
                slug: { in: categories ? categories.split(',') : [] },
            }
        })

        const categoryIds = categoryDocs.map(category => category.id)
        const posts = await payload.find({
            collection: 'posts',
            where: {
                _status: { equals: 'published' },
                language: { equals: locale },
                ...(categoryIds.length > 0 && { categories: { in: categoryIds } })
            },
            page: page ? Number(page) : 1,
            limit: 6,
            locale: locale,
            select: {
                title: true,
                slug: true,
                image: true,
                author: true,
                categories: true,
                createdAt: true,
                updatedAt: true
            },
            pagination: true
        })

        return NextResponse.json({
            data: {
                posts: posts.docs,
                pagination: {
                    total: posts.totalDocs,
                    limit: posts.limit
                }
            }
        }, { status: 200 })

    } catch (error) {

        console.error('error', error)

        return NextResponse.json({ error: { name: 'ServerError' } }, { status: 500 })

    }
}
