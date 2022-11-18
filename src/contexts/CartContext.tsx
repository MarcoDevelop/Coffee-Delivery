import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../components/CoffeeCard'
import { produce } from 'immer'

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

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  return (
    <CardContext.Provider value={{ cartItems }}>
      {children}
    </CardContext.Provider>
  )
}
