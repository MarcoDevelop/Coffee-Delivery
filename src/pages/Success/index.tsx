import { RegularText, TitleText } from '../../styles/themes/global'
import { OrderDetailsContainer, OrderSuccess } from './styles'
import Illustration from '../../assets/Illustration.png'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { IconsType } from '../../components/IconsType'
import { useTheme } from 'styled-components'

export function Success() {
  const { colors } = useTheme()
  return (
    <div>
      <OrderSuccess className="container">
        <div>
          <TitleText size="l">Uhu! Pedido confirmado</TitleText>
          <RegularText>
            Agora é só aguardar que logo o café chegará até você
          </RegularText>
        </div>

        <section>
          <OrderDetailsContainer>
            <IconsType
              icon={<MapPin weight="fill" />}
              iconBg={colors['brand-purple']}
              text={
                <RegularText>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  <br />
                  Farrapos - Porto Alegre, RS
                </RegularText>
              }
            />
            <IconsType
              icon={<Clock weight="fill" />}
              iconBg={colors['brand-yellow']}
              text={
                <RegularText>
                  Previsão de entrega
                  <br />
                  <strong>20 min - 30 min</strong>
                </RegularText>
              }
            />
            <IconsType
              icon={<CurrencyDollar weight="fill" />}
              iconBg={colors['brand-yellow-dark']}
              text={
                <RegularText>
                  Pagamento na entrega
                  <br />
                  <strong>Cartão de Crédito</strong>
                </RegularText>
              }
            />
          </OrderDetailsContainer>
          <img src={Illustration} alt="" />
        </section>
      </OrderSuccess>
    </div>
  )
}
