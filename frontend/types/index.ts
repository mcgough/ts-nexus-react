export type Item = {
  title: string
  id: string
  description: string
  price: number
  image: string
}

export type CartItem = {
  quantity: number
  price: number
  item: Item
}
