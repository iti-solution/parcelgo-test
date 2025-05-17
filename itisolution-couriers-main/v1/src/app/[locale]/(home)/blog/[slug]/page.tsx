import Post from '@/components/blog/Post'

import { getLocale } from 'next-intl/server'

import { getPost } from '@/lib/api/cms'

import { notFound } from 'next/navigation'
import { Fragment } from 'react'

import type { Metadata } from 'next'

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> => {

  const { slug } = await params

  const locale = await getLocale()

  const response = await getPost({ locale, slug })

  if ('error' in response) return {}

  const post = response.data.post

  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://parcelgo.com'

  const currentPath = locale === 'en' ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}`

  const openGraph: any = {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${baseUrl}${currentPath}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      authors: ['das', 'da'],
      locale: locale === 'pl' ? 'pl_PL' : 'en_US',
      url: `${baseUrl}${currentPath}`
    }
  }

  if (post.image && typeof post.image !== 'number' && post.image.url) {
    openGraph.images = [
      {
        url: post.image.url,
        width: post.image.width,
        height: post.image.height,
        alt: post.image.alt
      }
    ]
  }

  return openGraph
}

type Props = {
  params: Promise<{ slug: string }>
}

const Page = async (props: Props) => {

  const { slug } = await props.params

  const locale = await getLocale()

  const response = await getPost({ locale, slug })

  if ('error' in response) return notFound()

  const { data } = response

  return (
    <Fragment>

      <Post {...data.post} />

    </Fragment>
  )
}

export default Page