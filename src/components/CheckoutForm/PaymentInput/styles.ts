import styled from 'styled-components'

export const PaymentContainer = styled.div`
  padding: 0 1rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme['brand-purple']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  // não deixa o usuário selecinar o texto
  user-select: none;
`
