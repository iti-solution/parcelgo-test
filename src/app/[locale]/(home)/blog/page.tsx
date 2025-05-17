import Breadcrumbs from '@/components/ui/Breadcrumbs'

import Posts from '@/components/blog/Posts'

import { getLocale } from 'next-intl/server'

import { getCategories, getPosts } from '@/lib/api/cms'

import { notFound } from 'next/navigation'
import { Fragment } from 'react'

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

      <Breadcrumbs />

      <Posts
        posts={postsResponse.value.data.posts}
        categories={categoriesResponse.value.data.categories}
        pagination={{ ...postsResponse.value.data.pagination, page: page ? Number(page) : 1 }}
      />

    </Fragment>
  )
}

export default Page