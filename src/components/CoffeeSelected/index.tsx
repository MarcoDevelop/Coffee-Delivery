import { TitleText } from '../../styles/themes/global'
import { CoffeeSelectedContainer, DetailsContainer } from './styled'

export function CoffeeSelected() {
  return (
    <CoffeeSelectedContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>

      <DetailsContainer>
        <p>Items</p>
      </DetailsContainer>
    </CoffeeSelectedContainer>
  )
}
