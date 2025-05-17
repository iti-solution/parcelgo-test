import createNextIntlPlugin from 'next-intl/plugin'
import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */

import path from 'path'
import loaderUtils from 'loader-utils'

const hashModule = (context, exportName) => {
  const filePath = path.relative(context.rootContext, context.resourcePath).replace(/\\+/g, '/')
  const hashInput = `filePath:${filePath}#className:${exportName}`
  const hash = loaderUtils.getHashDigest(Buffer.from(hashInput), 'md4', 'base32', 6)
  return hash
}

const fonts = {
  hankenGrotesk: 'zqqgtc'
}

const hashFont = context => {
  const parsedQuery = JSON.parse(context.resourceQuery.replace('?', ''))
  return fonts[parsedQuery.variableName]
}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: process.env.NEXT_PUBLIC_DOMAIN
      }
    ]
  },
  webpack(config) {
    const rules = config.module.rules
      .find(rule => typeof rule.oneOf === 'object')
      .oneOf.filter(rule => Array.isArray(rule.use))

    rules.forEach(rule => {
      rule.use.forEach(moduleLoader => {
        if (moduleLoader.loader?.includes('css-loader') && !moduleLoader.loader?.includes('postcss-loader')) {
          if (moduleLoader.options.modules?.getLocalIdent) {
            moduleLoader.options.modules.getLocalIdent = (context, _, exportName) => {
              return 'parcelgo-' + (exportName === 'className'
                ? hashFont(context)
                : hashModule(context, exportName)
              )
            }
          }
        }
      })
    })

    return config
  }
}

const withNextIntl = createNextIntlPlugin()

export default withPayload(withNextIntl(nextConfig))