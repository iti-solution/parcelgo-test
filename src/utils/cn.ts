const cn = (...classes: (string | undefined)[]): string => classes.filter(Boolean).join(' ').trim()

export default cn