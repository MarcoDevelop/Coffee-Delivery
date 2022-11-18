import { Minus, Plus } from 'phosphor-react'
import { CounterInputContainer, IconWrapper } from './styled'

interface CounterInputProps {
  size?: 'medium' | 'small'
  onIncrement: () => void
  onDecrement: () => void
  quantity: number
}

export function CounterInput({
  onIncrement,
  onDecrement,
  quantity,
  size = 'medium',
}: CounterInputProps) {
  return (
    <CounterInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrement}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrement}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </CounterInputContainer>
  )
}
