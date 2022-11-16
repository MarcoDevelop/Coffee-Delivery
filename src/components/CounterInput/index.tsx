import { Minus, Plus } from 'phosphor-react'
import { CounterInputContainer, IconWrapper } from './styled'

interface CounterInputProps {
  size?: 'medium' | 'small'
}

export function CounterInput({ size = 'medium' }: CounterInputProps) {
  return (
    <CounterInputContainer size={size}>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </CounterInputContainer>
  )
}
