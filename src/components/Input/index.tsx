import { forwardRef, InputHTMLAttributes } from 'react'
import { InputStyleContainer, InputWrapper } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <InputWrapper>
        <InputStyleContainer {...props} ref={ref} />
      </InputWrapper>
    )
  },
)
