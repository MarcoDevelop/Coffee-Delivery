import { ReactNode } from 'react'
import { IconContainer, InfoIconContainer } from './styled'

interface InfoIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function IconsType({ icon, text, iconBg }: InfoIconProps) {
  return (
    <InfoIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoIconContainer>
  )
}
