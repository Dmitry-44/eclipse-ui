
export type buttonProps = Partial<{
    type: buttonType,
    disabled: boolean,
}>

export type buttonType = 'primary' | 'secondary' | 'ghost'