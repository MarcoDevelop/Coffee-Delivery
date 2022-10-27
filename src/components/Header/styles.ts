import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-100']};
  padding: 2.5rem 0 2.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;

  justify-content: space-between;
  align-items: center;

  height: 50px;
  border: 0;
  color: ${(props) => props.theme.white};

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-radius: 6px;

    padding: 1rem;

    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-radius: 6px;

    padding: 1rem;
    background: ${(props) => props.theme['yellow-light']};
  }
`
