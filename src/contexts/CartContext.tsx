import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../components/CoffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CardContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
}

interface CardContextProviderProps {
  children: ReactNode
}

export const CardContext = createContext({} as CardContextType)

export function CartContextProvider({ children }: CardContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

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

  function changeCartQuantity(
    cartItemId: number,
    type: 'increment' | 'decrement',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increment' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }
  return (
    <CardContext.Provider value={{ cartItems, cartQuantity, addCoffeeToCart }}>
      {children}
    </CardContext.Provider>
  )
}
