import { RegularText } from '../../styles/themes/global'
import { CounterInput } from '../CounterInput'
import { ActionsContainer, CoffeeCartContainer, RemoveButton } from './styled'
import { Trash } from 'phosphor-react'
import { CartItem } from '../../contexts/CartContext'
import { formatPrice } from '../../utils/FormatPrice'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCart({ coffee }: CoffeeCartCardProps) {
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatPrice(coffeeTotal)

  return (
    <CoffeeCartContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <CounterInput size="small" quantity={coffee.quantity} />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CoffeeCartContainer>
  )
}
