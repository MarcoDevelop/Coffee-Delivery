import { coffees } from '../../data/coffee'
import { TitleText } from '../../styles/themes/global'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeGrid, CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer className="container">
      <TitleText size="l">Nossos cafés</TitleText>
      <CoffeeGrid>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeGrid>
    </CoffeeListContainer>
  )
}
