import { CounterInputContainer } from './styled'

export function CounterInput() {
  return (
    <CounterInputContainer>
      <input type="number" readOnly value={1} />
    </CounterInputContainer>
  )
}
