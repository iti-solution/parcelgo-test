import Unknown from '@/components/core/Unknown'

import { useTranslations } from 'next-intl'

const NotFound = () => {

    const translation = useTranslations('Home.NotFound')

    return (
        <Unknown
            title={translation('Title')}
            description={translation('Description')}
            button={{
                href: '/',
                text: translation('ButtonText')
            }}
        />
    )
}

export default NotFound