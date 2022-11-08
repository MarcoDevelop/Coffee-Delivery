import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  background: ${(props) => props.theme['base-background']};
  display: flex;
  align-items: center;

  padding: 0 2.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;

  font-size: ${(props) => props.theme['text-regular-s']};

  ${({ variant, theme }) => css`
    background: ${(props) => props.theme[`brand-${variant}-light`]};
    color: ${(props) => props.theme[`brand-${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${(props) => props.theme[`brand-purple`]};
      }
    `}
`
