import styled from 'styled-components'
import { SectionBase } from '../../pages/Checkout/styles'

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const DetailsContainer = styled(SectionBase)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`

export const OrderTotalContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
