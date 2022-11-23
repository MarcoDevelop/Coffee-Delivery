import { forwardRef, InputHTMLAttributes } from 'react'
import { RegularText } from '../../styles/themes/global'
import { InputStyleContainer, InputWrapper } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer {...props} ref={ref} />
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  },
)
