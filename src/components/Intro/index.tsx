import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles'
import introIgm from '../../assets/intro-img.png'
import { RegularText } from '../../styles/themes/global'
import { InfoIconContainer } from '../IconsType/styled'
import { ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoIconContainer
              iconBg={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <p>Embalagem mantém o café intacto</p>
            <p>Entrega rápida e rastreada</p>
            <p>O café chega fresquinho até você</p>
          </BenefitsContainer>
        </div>

        <img src={introIgm} alt="Coffee" />
      </IntroContent>
    </IntroContainer>
  )
}
