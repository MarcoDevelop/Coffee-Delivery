import { PaymentMethodContainer, ContentContainer } from './styles'
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

type PaymentMethodsInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodsInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})
