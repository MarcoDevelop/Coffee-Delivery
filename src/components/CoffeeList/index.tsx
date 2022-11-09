import { TitleText } from '../../styles/themes/global'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeGrid, CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer className="container">
      <TitleText size="l">
        Nossos cafés
        <CoffeeGrid>
          <CoffeeCard />
        </CoffeeGrid>
      </TitleText>
    </CoffeeListContainer>
  )
}
