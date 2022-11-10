import styled from 'styled-components'

export const CounterInputContainer = styled.input`
  flex: 1;
  background: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;

  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme['base-title']};

    &:focus {
      outline: none;
    }
  }
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})``
