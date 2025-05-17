'use client'

import { useCallback } from 'react'

import { useField, Button, TextInput, FieldLabel, useFormFields, FieldDescription } from '@payloadcms/ui'

import type { TextFieldClientProps } from 'payload'

const formatSlug = (value: string): string => {

    const polishChars: { [key: string]: string } = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ż': 'z', 'ź': 'z',
        'Ą': 'a', 'Ć': 'c', 'Ę': 'e', 'Ł': 'l', 'Ń': 'n', 'Ó': 'o', 'Ś': 's', 'Ż': 'z', 'Ź': 'z'
    }

    return value
        .split('')
        .map(char => polishChars[char] || char)
        .join('')
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .toLowerCase()
}

type Props = { fieldToUse: string } & TextFieldClientProps

const SlugField: React.FC<Props> = ({ field, fieldToUse, path }) => {

    const { label } = field

    const { value, setValue } = useField<string>({ path: path || field.name })

    const targetFieldValue = useFormFields(([fields]) => fields[fieldToUse]?.value as string)

    const handleLock = useCallback((event: React.MouseEvent<Element>) => {

        event.preventDefault()

        const formattedSlug = formatSlug(targetFieldValue)

        setValue(formattedSlug)

    }, [targetFieldValue])


    return (
        <div>

            <FieldLabel htmlFor={`field-${path}`} label={label} />

            <TextInput value={value} onChange={setValue} path={path || field.name} required />
            
            <FieldDescription description={field.admin?.description} path={path} />

            {targetFieldValue && <Button className="lock-button" buttonStyle="primary" onClick={handleLock}>Uzupełnij automatycznie</Button>}


        </div>
    )
}

export default SlugField