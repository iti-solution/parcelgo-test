import Breadcrumbs from '@/components/ui/Breadcrumbs'

import Post from '@/components/blog/Post'

import { getLocale } from 'next-intl/server'

import { getPost } from '@/lib/api/cms'

import { notFound } from 'next/navigation'
import { Fragment } from 'react'

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

      <Breadcrumbs />

      <Post {...data.post} />

    </Fragment>
  )
}

export default Page