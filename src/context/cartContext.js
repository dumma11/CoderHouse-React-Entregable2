import { createContext, useContext } from 'react'

export const cartContext = createContext()

//custom hook
export const useCart = () => useContext(cartContext)