'use client'

import { cn } from '@/utils'
import styles from './text-area.module.scss'

import TextareaAutosize from 'react-textarea-autosize'
import { useCallback, useId } from 'react'

type Props = {
  label: string
  textarea: {
    name: string
    defaultValue?: string
    required?: boolean
    readOnly?: boolean
    placeholder?: string
    minLength?: number
    maxLength?: number
  }
  className?: string
}

const TextArea = ({ label, textarea, className }: Props) => {

  const textareaId = useId()

  const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { parentNode, value } = event.target
    const parentElement = parentNode as HTMLElement
    
    if (value) {
      parentElement.classList.add(styles.rootActive)
    } else {
      parentElement.classList.remove(styles.rootActive)
    }

  }, [])

  const isRequired = textarea.required ? styles.rootLabelRequired : ''
  const isReadonly = textarea.readOnly ? styles.rootReadonly : ''
  const isActive = textarea.defaultValue ? styles.rootActive : ''

  return (
    <div className={cn(styles.root, isActive, isReadonly, className)}>
      <label
        htmlFor={textareaId}
        className={cn(styles.rootLabel, isRequired)}
      >
        {label}
      </label>
      <TextareaAutosize
        minRows={2}
        maxRows={10}
        id={textareaId}
        name={textarea.name}
        defaultValue={textarea.defaultValue}
        minLength={textarea.minLength}
        maxLength={textarea.maxLength}
        className={styles.rootTextarea}
        readOnly={textarea.readOnly}
        required={textarea.required}
        placeholder={textarea.placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

export default TextArea
