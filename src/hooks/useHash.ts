import { useState, useEffect } from 'react'

const useHash = () => {

    const [hash, setHash] = useState('')

    useEffect(() => {

        if (typeof window !== 'undefined') {

            const onHashChange = () => {
                setHash(window.location.hash)
            }

            window.addEventListener('hashchange', onHashChange)

            return () => window.removeEventListener('hashchange', onHashChange)
            
        }

    }, [])

    return hash
}

export default useHash
