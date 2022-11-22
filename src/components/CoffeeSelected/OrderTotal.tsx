import { useCart } from '../../hooks/useCart'
import { RegularText } from '../../styles/themes/global'
import { formatPrice } from '../../utils/FormatPrice'
import { Button } from '../Button'
import { OrderTotalContainer } from './styled'

const DELIVERY_PRICE = 3.5

export function OrderTotal() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatPrice(cartItemsTotal)
  const formattedCartTotal = formatPrice(cartTotal)
  const formattedDeliveryPrice = formatPrice(DELIVERY_PRICE)

  return (
    <OrderTotalContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedCartTotal}
        </RegularText>
      </div>
      <Button
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </OrderTotalContainer>
  )
}
