import { CheckoutForm } from '../../components/CheckoutForm'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <CheckoutForm />
    </CheckoutContainer>
  )
}
