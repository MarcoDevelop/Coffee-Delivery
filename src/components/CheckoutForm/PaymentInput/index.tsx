import { PaymentContainer, ContentContainer } from './styles'
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

type paymentMethodsInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  paymentMethodsInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentContainer>
      <input id={id} type="radio" {...props} name="paymentMethods" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentContainer>
  )
})
