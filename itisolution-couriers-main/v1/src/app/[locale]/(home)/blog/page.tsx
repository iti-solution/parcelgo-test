import Posts from '@/components/blog/Posts'

import { getLocale, getTranslations } from 'next-intl/server'

import { getCategories, getPosts } from '@/lib/api/cms'

import { notFound } from 'next/navigation'
import { Fragment } from 'react'

import type { Metadata } from 'next'

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {

  const { locale } = await params

  const translation = await getTranslations({ locale: locale, namespace: 'Posts.Seo' })

  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://parcelgo.com'

  const currentPath = locale === 'en' ? '/blog' : `/${locale}/blog`

  return {
    title: translation('Title'),
    description: translation('Description'),
    alternates: {
      canonical: `${baseUrl}${currentPath}`,
      languages: {
        'en': baseUrl,
        'pl': `${baseUrl}/pl`
      }
    },
    openGraph: {
      title: translation('Title'),
      description: translation('Description'),
      url: `${baseUrl}${currentPath}`,
      locale: locale === 'pl' ? 'pl_PL' : 'en_US',
      type: 'website'
    }
  }
}

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] }>
}

const Page = async ({ searchParams }: Props) => {

  const { page, categories } = await searchParams

  const locale = await getLocale()

  const [postsResponse, categoriesResponse] = await Promise.allSettled([getPosts({ locale, categories, page }), getCategories({ locale })])

  if (postsResponse.status === 'rejected' || 'error' in postsResponse.value) notFound()

  if (categoriesResponse.status === 'rejected' || 'error' in categoriesResponse.value) notFound()

  return (
    <Fragment>
      
      <Posts
        posts={postsResponse.value.data.posts}
        categories={categoriesResponse.value.data.categories}
        pagination={{ ...postsResponse.value.data.pagination, page: page ? Number(page) : 1 }}
      />

    </Fragment>
  )
}

export default Page