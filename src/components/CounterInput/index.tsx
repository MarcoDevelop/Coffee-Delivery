import { Minus, Plus } from 'phosphor-react'
import { CounterInputContainer, IconWrapper } from './styled'

export function CounterInput() {
  return (
    <CounterInputContainer>
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
