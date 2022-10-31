import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logoImg} alt="" />

        <HeaderButtonsContainer>
          <HeaderButton>
            <MapPin size={20} weight="fill" color="#8047F8" /> Porto Alegre, RS
          </HeaderButton>

          <HeaderButton>
            <ShoppingCart size={20} weight="fill" color="#C47F17" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
