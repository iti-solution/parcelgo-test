import Unknown from '@/components/core/Unknown'

import { useTranslations } from 'next-intl'

const NotFound = () => {

    const translation = useTranslations('Posts.NotFound')

    return (
        <Unknown
            title={translation('Title')}
            description={translation('Description')}
            button={{
                href: '/blog',
                text: translation('ButtonText')
            }}
        />
    )
}

export default NotFound