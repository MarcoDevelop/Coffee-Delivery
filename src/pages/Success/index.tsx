import { RegularText, TitleText } from '../../styles/themes/global'
import { OrderDetailsContainer, OrderSuccess } from './styles'
import Illustration from '../../assets/Illustration.png'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { IconsType } from '../../components/IconsType'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { paymentMethods } from '../../components/CheckoutForm/PaymentOptions'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function Success() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>

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
                  Entrega em{' '}
                  <strong>
                    {state.street}, {state.number}
                  </strong>
                  <br />
                  {state.district} - {state.city}, {state.uf}
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
                  <strong>{paymentMethods[state.paymentMethod].label}</strong>
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
