import { useCart } from '../../hooks/useCart'
import { TitleText } from '../../styles/themes/global'
import { CoffeeCart } from '../CoffeeCart'
import { OrderTotal } from './OrderTotal'
import { CoffeeSelectedContainer, DetailsContainer } from './styled'

export function CoffeeSelected() {
  const { cartItems } = useCart()

  return (
    <CoffeeSelectedContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCart key={item.id} coffee={item} />
        ))}

        <OrderTotal />
      </DetailsContainer>
    </CoffeeSelectedContainer>
  )
}
