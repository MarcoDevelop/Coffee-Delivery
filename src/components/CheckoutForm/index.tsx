import { TitleText } from '../../styles/themes/global'
import { CheckoutFormContainer, FormSectionContainer } from './styles'

export function CheckoutForm() {
  return (
    <CheckoutFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer></FormSectionContainer>
    </CheckoutFormContainer>
  )
}
