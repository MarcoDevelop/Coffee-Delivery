import { CheckoutForm } from '../../components/CheckoutForm'
import { CoffeeSelected } from '../../components/CoffeeSelected'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <CheckoutForm />
      <CoffeeSelected />
    </CheckoutContainer>
  )
}
