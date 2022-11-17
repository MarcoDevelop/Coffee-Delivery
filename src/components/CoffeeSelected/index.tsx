import { TitleText } from '../../styles/themes/global'
import { CoffeeCart } from '../CoffeeCart'
import { OrderTotal } from './OrderTotal'
import { CoffeeSelectedContainer, DetailsContainer } from './styled'

export function CoffeeSelected() {
  return (
    <CoffeeSelectedContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCart />
        <CoffeeCart />

        <OrderTotal />
      </DetailsContainer>
    </CoffeeSelectedContainer>
  )
}
