import { useQuery, QueryResult } from '@apollo/client'
import gql from 'graphql-tag'
import styled from 'styled-components'
import ItemCard from './ItemCard'
import { Item } from '../types'

const Center = styled.div`
  text-align: center;
`

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
    }
  }
`

const Items = () => {
  const { loading, error, data }: QueryResult = useQuery(ALL_ITEMS_QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! {error.message}</p>
  return (
    <Center>
      <ItemsList>
        {data.items.map((item: Item) => (
          <ItemCard details={item} key={item.id} />
        ))}
      </ItemsList>
    </Center>
  )
}

export default Items
export { ALL_ITEMS_QUERY }
