import { ActionsContainer, HeaderContainer, HeaderContent } from './styles'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <ActionsContainer>
          <span>
            <MapPin size={32} color="#8047F8" /> Porto Alegre, RS
          </span>
          <div>
            <ShoppingCartSimple size={32} color="#C47F17" />
          </div>
        </ActionsContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
