import { PaymentInput } from './PaymentInput'
import { PaymentOptionsContainer } from './styles'

export function PaymentOptions() {
  return (
    <PaymentOptionsContainer>
      <PaymentInput />
      <PaymentInput />
      <PaymentInput />
    </PaymentOptionsContainer>
  )
}
