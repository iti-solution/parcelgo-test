import '@/styles/globals.scss'

import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { ThemeProvider } from 'next-themes'

import { Hanken_Grotesk } from 'next/font/google'
import { notFound } from 'next/navigation'

import { routing } from '@/i18n/routing'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'https://parcelgo.com'),
    alternates: {
        languages: {
            'en': '/',
            'pl': '/pl'
        },
        canonical: '/'
    }
}

type Props = {
    children: React.ReactNode
    params: Promise<{ locale: string | undefined }>
}

const Layout = async ({ children, params }: Props) => {

    const { locale } = await params

    if (!hasLocale(routing.locales, locale)) notFound()

    const messages = await getMessages()

    return (
        <html lang={locale} suppressHydrationWarning>

            <body className={hankenGrotesk.className}>

                <ThemeProvider defaultTheme="dark" enableSystem={false} enableColorScheme={false} disableTransitionOnChange>

                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>

                </ThemeProvider>

            </body>

        </html>
    )
}

export default Layout
