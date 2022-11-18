import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../components/CoffeeCard'

export interface CartItem extends Coffee {
  quantity: number
}

interface CardContextType {
  cartItems: CartItem[]
}

interface CardContextProviderProps {
  children: ReactNode
}

export const CardContext = createContext({} as CardContextType)

export function CartContextProvider({ children }: CardContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  return (
    <CardContext.Provider value={{ cartItems }}>
      {children}
    </CardContext.Provider>
  )
}
