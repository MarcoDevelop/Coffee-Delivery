import { PaymentContainer } from './styles'
import { CreditCard } from 'phosphor-react'

export function PaymentInput() {
  return (
    <PaymentContainer>
      <CreditCard size={16} />
      Cartão de Crédito
    </PaymentContainer>
  )
}
