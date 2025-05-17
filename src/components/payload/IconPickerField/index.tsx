'use client'

import { useState, useEffect, useCallback, useRef, ChangeEvent } from 'react'
import {
    useField,
    TextInput,
    FieldLabel,
    FieldDescription,
    Button
} from '@payloadcms/ui'
import * as icons from 'react-icons/pi'

// Definicja typu dla właściwości komponentu
interface IconPickerFieldProps {
    field: {
        name: string;
        label: string;
        required?: boolean;
        admin?: {
            description?: string;
        };
    };
    path?: string;
}

// Typ dla ikon z react-icons/pi
type IconType = keyof typeof icons;

const IconPickerField: React.FC<IconPickerFieldProps> = ({ field, path }) => {

    const pickerRef = useRef<HTMLDivElement>(null)

    const fieldPath = path || field.name

    const { value = '', setValue } = useField<string>({ path: fieldPath })

    const [searchTerm, setSearchTerm] = useState<string>('')
    const [showPicker, setShowPicker] = useState<boolean>(false)

    const iconsList = Object.keys(icons).filter(k => k.startsWith('Pi')).sort() as IconType[]

    const filteredIcons = typeof searchTerm === 'string'
        ? iconsList.filter(i => i.toLowerCase().includes(searchTerm.toLowerCase()))
        : iconsList

    const displayedIcons = filteredIcons.slice(0, 100)
    
    const isValidIcon = (iconName: string): iconName is IconType => 
        iconName !== undefined && iconName !== '' && Object.prototype.hasOwnProperty.call(icons, iconName)
    
    const SelectedIcon = isValidIcon(value) ? icons[value] : null

    useEffect(() => {
        if (!showPicker) return

        const handleClickOutside = (e: MouseEvent) => {

            if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
                setShowPicker(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside, { capture: true })

        return () => document.removeEventListener('mousedown', handleClickOutside, { capture: true })
        
    }, [showPicker])

    const handleSelectIcon = useCallback((iconName: string) => {
        if (isValidIcon(iconName)) {
            setValue(iconName)
            setShowPicker(false)
            setSearchTerm('')
        }
    }, [setValue])

    const togglePicker = useCallback(() => {
        setShowPicker(prev => !prev)
    }, [])

    const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value || '')
    }, [])

    return (
        <div id={`icon-picker-${fieldPath}`} ref={pickerRef} style={{ position: 'relative' }}>
            <FieldLabel htmlFor={`field-${fieldPath}`} label={field.label} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <TextInput
                    value={value}
                    path={fieldPath}
                    required={field.required}
                    readOnly
                />

                <Button buttonStyle="secondary" onClick={togglePicker}>
                    {SelectedIcon ? <SelectedIcon size={20} /> : 'Wybierz ikonę'}
                </Button>
            </div>

            <FieldDescription 
                description={field.admin?.description || ''} 
                path={fieldPath} 
            />

            {showPicker && (
                <div style={{
                    position: 'absolute',
                    zIndex: 10,
                    width: '100%',
                    maxWidth: '480px',
                    background: 'var(--theme-elevation-50)',
                    border: '1px solid var(--theme-elevation-150)',
                    borderRadius: 'var(--radius)',
                    padding: '1rem',
                    marginTop: '0.5rem',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    <TextInput
                        placeholder="Wyszukaj ikonę..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        path={`${fieldPath}-search`}
                        style={{ marginBottom: '1rem' }}
                    />

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                        gap: '0.75rem',
                        maxHeight: '300px',
                        overflowY: 'auto'
                    }}>
                        {displayedIcons.length ? (
                            displayedIcons.map(iconName => {
                                const Icon = isValidIcon(iconName) ? icons[iconName] : null
                                return (
                                    <Button
                                        key={iconName}
                                        onClick={() => handleSelectIcon(iconName)}
                                        buttonStyle="none"
                                    >
                                        {Icon && <Icon size={20} />}

                                        <FieldDescription 
                                            description={iconName} 
                                            path={fieldPath} 
                                        />
                                    </Button>
                                )
                            })
                        ) : (
                            <div style={{
                                gridColumn: '1 / -1',
                                textAlign: 'center',
                                color: 'var(--theme-text-light)'
                            }}>
                                Nie znaleziono ikon
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default IconPickerField