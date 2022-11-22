import { RegularText } from '../../styles/themes/global'
import { CounterInput } from '../CounterInput'
import { ActionsContainer, CoffeeCartContainer, RemoveButton } from './styled'
import { Trash } from 'phosphor-react'
import { CartItem } from '../../contexts/CartContext'
import { formatPrice } from '../../utils/FormatPrice'
import { useCart } from '../../hooks/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCart({ coffee }: CoffeeCartCardProps) {
  const { changeCartQuantity, removeCartItem } = useCart()

  function handleIncrement() {
    changeCartQuantity(coffee.id, 'increment')
  }

  function handleDecrement() {
    changeCartQuantity(coffee.id, 'decrement')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatPrice(coffeeTotal)

  return (
    <CoffeeCartContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <CounterInput
              size="small"
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemove}>
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
