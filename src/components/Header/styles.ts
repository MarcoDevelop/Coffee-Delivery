import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  background: ${(props) => props.theme['base-card']};
  display: flex;
  align-items: center;

  padding: 0 2.5rem;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: transparent;
    }
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
  cursor: inherit;

  font-size: ${(props) => props.theme['text-regular-s']};

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme['base-white']};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  ${({ variant, theme }) => css`
    background: ${(props) => props.theme[`brand-${variant}-light`]};
    color: ${(props) => props.theme[`brand-${variant}-dark`]};

    span {
      background: ${(props) => props.theme[`brand-${variant}-dark`]};
    }
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${(props) => props.theme[`brand-purple`]};
      }
    `}
`
