interface ButtonProps{
    label: string,
    disabled?: boolean,
    type?:'button' | 'submit' | 'reset'
    handleClick?: any
}


const Button = ({
    label = '',
    disabled = false,
    type='button',
    handleClick
}:ButtonProps) => {
    return (
        <button type={type} disabled={disabled} onClick={event =>handleClick()}>{label}</button>
    )
}

export default Button