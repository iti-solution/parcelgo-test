import styles from './post.module.scss'

import { RichText } from '@payloadcms/richtext-lexical/react'

import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import type { DefaultNodeTypes, SerializedLinkNode, SerializedUploadNode, SerializedTextNode } from '@payloadcms/richtext-lexical'

import Image from 'next/image'

import { Link } from '@/i18n/routing'

type Props = {
    data: {
        id: string
        content: SerializedEditorState
    }
} & React.HTMLAttributes<HTMLDivElement>


const LinkConverter: React.FC<{ node: SerializedLinkNode }> = ({ node }) => {

    const { fields, children } = node

    if (fields.linkType === 'custom') {

        return (
            <Link href={fields.url || '/'}>
                {children.map((child) => (child as SerializedTextNode).text).join('') || ''}
            </Link>
        )
    }

    return null
}

const UploadConverter: React.FC<{ node: SerializedUploadNode }> = ({ node }) => {

    if (node.relationTo === 'media') {

        const uploadDoc = node.value

        if (typeof uploadDoc !== 'object') return null

        const { alt, height, url, width } = uploadDoc

        if (!url || !width || !height) return null

        return <Image alt={alt} height={height} src={url} width={width} />
    }

    return null
}

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({ defaultConverters }) => ({

    ...defaultConverters,

    link: ({ node }) => <LinkConverter node={node} />,

    upload: ({ node }) => <UploadConverter node={node} />

})

const PostBlocksArticle = ({ data }: Props) => {

    return (
        <div data-identifier={data.id} className={styles.blocksArticle}>
            <RichText data={data.content} converters={jsxConverters} />
        </div>
    )
}

export default PostBlocksArticle