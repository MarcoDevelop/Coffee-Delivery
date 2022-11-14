import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const SectionBase = styled.div`
  width: 100%;
  background: ${(props) => props.theme[`base-card`]};
  border-radius: 6px;
  padding: 2.5rem;
`
