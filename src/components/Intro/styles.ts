import { rgba } from 'polished'
import styled from 'styled-components'
import imageUrl from '../../assets/intro-background.svg'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${imageUrl}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme['base-white']} 0%,
        ${rgba(theme['base-background'], 0.2)} 50%,
        ${theme['base-background']} 100%
      )`};

  background-size: cover;
`
export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`
