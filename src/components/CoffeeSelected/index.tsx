import { TitleText } from '../../styles/themes/global'
import { CoffeeCart } from '../CoffeeCart'
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
        <CoffeeCart />
      </DetailsContainer>
    </CoffeeSelectedContainer>
  )
}
