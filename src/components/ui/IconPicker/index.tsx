import * as icons from 'react-icons/pi'

type IconPickerProps = {
    iconName: string
}

const IconPicker = ({ iconName }: IconPickerProps) => {
    const IconComponent = icons[iconName as keyof typeof icons]

    if (!IconComponent) return ''

    return <IconComponent />
}

export default IconPicker
