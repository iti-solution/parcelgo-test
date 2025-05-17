import Fetcher from './fetcher'
import type { Category, HomePage, Post } from '@/payload-types'

const fetcher = new Fetcher()

type Props = {
    locale: string
    [key: string]: any
}

type ApiResponse<T> = { data: T } | { error: { name: string } }

export const getHomePage = async (props: Props): Promise<ApiResponse<HomePage>> => {

    const params = new URLSearchParams({ locale: props.locale })

    return await fetcher.get(`/cms/home-page?${params.toString()}`, ['home-page'])
}

// posty

export const getPost = async (props: Props): Promise<ApiResponse<{ post: Post }>> => {

    const params = new URLSearchParams({ locale: props.locale })

    return await fetcher.get(`/cms/posts/${props.slug}?${params.toString()}`, ['posts-' + props.slug])
}

export const getPosts = async (props: Props): Promise<ApiResponse<{ posts: Post[], pagination: { total: number, limit: number } }>> => {

    const params = new URLSearchParams({ locale: props.locale, categories: props.categories, page: props.page })

    return await fetcher.get(`/cms/posts?${params.toString()}`, ['posts'])
}

// kategorie

export const getCategories = async (props: Props): Promise<ApiResponse<{ categories: Category[] }>> => {

    const params = new URLSearchParams({ locale: props.locale })

    return await fetcher.get(`/cms/categories?${params.toString()}`, ['categories'])
}

// contact

export const sendEmail = async (props: Props, body: FormData): Promise<ApiResponse<{ success: boolean }>> => {

    const params = new URLSearchParams({ locale: props.locale })

    return await fetcher.post(`/cms/contact?${params.toString()}`, body)
}