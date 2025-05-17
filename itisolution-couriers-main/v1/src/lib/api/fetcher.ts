class Fetcher {

    get = async <T>(url: string, tags: string[] = []): Promise<T | { error: { name: string } }> => {

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, { next: { revalidate: false, tags: tags } })
            
            if (!response.ok) {
                const errorData = await response.json()
                return { error: errorData.error || { name: 'UnknownError' } }
            }

            return await response.json()
        } catch (error) {
            return { error: error instanceof Error ? { name: error.message } : { name: 'UnknownError' } }
        }
    }

    post = async <T>(url: string, body: FormData, tags: string[] = []): Promise<T | { error: { name: string } }> => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
                method: 'POST',
                body: body,
                next: { tags }
            })

            if (!response.ok) {
                const errorData = await response.json()
                return { error: errorData.error || { name: 'UnknownError' } }
            }

            return await response.json()
        } catch (error) {
            return { error: error instanceof Error ? { name: error.message } : { name: 'UnknownError' } }
        }
    }
}

export default Fetcher
