import { useEffect } from 'react'

const useOutside = (ref: React.RefObject<HTMLElement | null>, handler: () => void): void => {

    useEffect(() => {

        const handleOutsideClick = (event: MouseEvent) => {

            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler()
            }

        }

        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
        
    }, [ref, handler])
}

export default useOutside