import { revalidateTag } from 'next/cache'

import { HomePageHero } from './HomePageHero'
import { HomePageFunctionalities } from './HomePageFunctionalities'
import { HomePagePricing } from './HomePagePricing'
import { HomePageOpinions } from './HomePageOpinions'
import { HomePageFaq } from './HomePageFaq'
import { HomePageContact } from './HomePageContact'

import type { GlobalConfig } from 'payload'

const slug = 'home-page'

const HomePage: GlobalConfig = {
    slug: slug,
    label: 'Strona główna',
    admin: {
        group: 'Podstrony'
    },
    hooks: {
        afterChange: [() => revalidateTag(slug)],
    },
    fields: [
        HomePageHero,
        HomePageFunctionalities,
        HomePagePricing,
        HomePageOpinions,
        HomePageFaq,
        HomePageContact
    ]
}

export default HomePage