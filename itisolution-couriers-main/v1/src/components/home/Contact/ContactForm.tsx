'use client'

import styles from './contact.module.scss'

import TextField from '@/components/ui/TextField'
import { ButtonPrimary } from '@/components/ui/Button'
import { ChangeEvent, useCallback, useState } from 'react'

const ContactForm = () => {

    const [isEmailValid, setIsEmailValid] = useState(false)

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {

        setIsEmailValid(event.target.validity.valid)
        
    }, [])

    return (
        <form onSubmit={event => event.preventDefault()} className={styles.form} spellCheck="false" autoComplete="off">

            <h3 className={styles.formTitle}>Skontaktujmy się</h3>

            <TextField
                label="Adres e-mail"
                input={{
                    name: 'email',
                    type: 'email',
                    required: true,
                    placeholder: 'Adres e-mail'
                }}
                onChange={handleChange}
            />

            <ButtonPrimary action="contact" type="button" disabled={!isEmailValid}>
                Wyślij wiadomość
            </ButtonPrimary>

        </form>
    )
}

export default ContactForm