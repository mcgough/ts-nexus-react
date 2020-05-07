import { CartItem } from '../types'

export default function calcTotalPrice(cart: CartItem[]): number {
  return cart.reduce((tally: number, cartItem: CartItem) => {
    if (!cartItem.item) return tally
    return tally + cartItem.quantity * cartItem.item.price
  }, 0)
}
