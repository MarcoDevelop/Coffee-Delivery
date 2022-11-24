import { PaymentContainer, ContentContainer } from './styles'
import { InputHTMLAttributes, ReactNode } from 'react'
type paymentMethodsInputPorps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export function PaymentInput({
  id,
  icon,
  label,
  ...props
}: paymentMethodsInputPorps) {
  return (
    <PaymentContainer>
      <input id={id} type="radio" {...props} name="paymentMethods" />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentContainer>
  )
}
