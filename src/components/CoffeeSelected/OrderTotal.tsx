import { RegularText } from '../../styles/themes/global'
import { Button } from '../Button'
import { OrderTotalContainer } from './styled'

export function OrderTotal() {
  return (
    <OrderTotalContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ 19,80</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ 23,30
        </RegularText>
      </div>
      <Button text="confirmar pedido" />
    </OrderTotalContainer>
  )
}
