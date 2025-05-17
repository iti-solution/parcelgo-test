import Hero from '@/components/home/Hero'
import Integrations from '@/components/home/Integrations'
import Functionalities from '@/components/home/Functionalities'
import Pricing from '@/components/home/Pricing'
import Opinions from '@/components/home/Opinions'
import Action from '@/components/home/Action'
import Faq from '@/components/home/Faq'
import Contact from '@/components/home/Contact'

import { getLocale, getTranslations } from 'next-intl/server'

import { getHomePage } from '@/lib/api/cms'

import { notFound } from 'next/navigation'
import { Fragment } from 'react'

import type { Metadata } from 'next'

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {

  const { locale } = await params

  const translation = await getTranslations({ locale: locale, namespace: 'Home.Seo' })

  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://parcelgo.com'

  const currentPath = locale === 'en' ? '' : `/${locale}`

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

const Page = async () => {

  const locale = await getLocale()

  const response = await getHomePage({ locale })

  if ('error' in response) return notFound()

  const { data } = response

  return (
    <Fragment>

      <Hero {...data.hero} />

      <Integrations />

      <Functionalities {...data.functionalities} />

      <Pricing {...data.pricing} />

      <Action />

      <Opinions {...data.opinions} />

      <Faq {...data.faq} />

      <Contact {...data.contact} />

    </Fragment>
  )
}

export default Page