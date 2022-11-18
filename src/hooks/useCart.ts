import { useContext } from 'react'
import { CardContext } from '../contexts/CartContext'

export function useCart() {
  const context = useContext(CardContext)
  return context
}
