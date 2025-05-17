import Hero from '@/components/home/Hero'
import Integrations from '@/components/home/Integrations'
import Functionalities from '@/components/home/Functionalities'
import Pricing from '@/components/home/Pricing'
import Opinions from '@/components/home/Opinions'
import Action from '@/components/home/Action'
import Faq from '@/components/home/Faq'

import { getLocale } from 'next-intl/server'

import { getHomePage } from '@/lib/api/cms'

import { notFound } from 'next/navigation'
import { Fragment } from 'react'

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

    </Fragment>
  )
}

export default Page