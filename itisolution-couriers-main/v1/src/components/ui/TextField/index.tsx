'use client'

import { cn } from '@/utils'
import styles from './text-field.module.scss'

import { useCallback, useId } from 'react'

import type { ChangeEvent } from 'react'

type Props = {
  label: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  input: {
    name: string
    type: string
    defaultValue?: string
    required?: boolean
    readOnly?: boolean
    placeholder?: string
    minLength?: number
    maxLength?: number
  }
  className?: string
}

const TextField = ({ label, onChange, input, className }: Props) => {

  const inputId = useId()

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {

    if (onChange) onChange(event)
      
    const { parentNode, value } = event.target

    const parentElement = parentNode as HTMLElement

    if (value) {
      parentElement.classList.add(styles.rootActive)
    } else {
      parentElement.classList.remove(styles.rootActive)
    }

  }, [])

  const isRequired = input.required ? styles.rootLabelRequired : ''
  const isReadonly = input.readOnly ? styles.rootReadonly : ''
  const isActive = input.defaultValue || input.type === 'date' ? styles.rootActive : ''

  return (
    <div className={cn(styles.root, isActive, isReadonly, className)}>
      <label
        htmlFor={inputId}
        className={cn(styles.rootLabel, isRequired)}
      >
        {label}
      </label>
      <input
        id={inputId}
        type={input.type}
        name={input.name}
        defaultValue={input.defaultValue}
        minLength={input.minLength}
        maxLength={input.maxLength}
        className={styles.rootInput}
        readOnly={input.readOnly}
        required={input.required}
        placeholder={input.placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

export default TextField
