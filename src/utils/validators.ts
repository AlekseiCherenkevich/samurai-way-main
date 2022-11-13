export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value: string): string | undefined => {
    if (value) return undefined
    return 'Field is required!'
}

export const maxLength = (maxLength: number): FieldValidatorType => (value: string) => {
    return (value.length > maxLength)
        ? `Max length is ${maxLength} symbols!`
        : undefined
}