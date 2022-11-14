import { TitleText } from '../../styles/themes/global'
import { SectionTitle } from '../SectionTitle'
import { CheckoutFormContainer, FormSectionContainer } from './styles'
import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function CheckoutForm() {
  const { colors } = useTheme()

  return (
    <CheckoutFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
        />
      </FormSectionContainer>
    </CheckoutFormContainer>
  )
}
