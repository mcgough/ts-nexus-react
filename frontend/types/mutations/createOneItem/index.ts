import { gql } from '@apollo/client'
import { Item } from '../../'

export type Response = {
  createOneItem: Item
}

const CREATE_ONE_ITEM = gql`
  mutation CREATE_ONE_ITEM(
    $title: String!
    $price: Int!
    $description: String!
    $image: String
    $large_image: String
  ) {
    createOneItem(
      data: {
        title: $title
        price: $price
        description: $description
        image: $image
        large_image: $large_image
      }
    ) {
      id
    }
  }
`

export default CREATE_ONE_ITEM
