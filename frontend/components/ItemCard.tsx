import Link from 'next/link'
import Title from './styles/Title'
import ItemStyles from './styles/ItemStyles'
import PriceTag from './styles/PriceTag'
import formatMoney from '../lib/formatMoney'
import { Item } from '../types'

type Props = {
  details: Item
}

const ItemCard = ({ details }: Props) => (
  <ItemStyles>
    {details.image && <img src={details.image} alt={details.title} />}
    <Title>
      <Link
        href={{
          pathname: '/item',
          query: { id: details.id },
        }}
      >
        <a>{details.title}</a>
      </Link>
    </Title>
    <PriceTag>{formatMoney(details.price)}</PriceTag>
    <p>{details.description}</p>
    <div className="buttonList">
      <Link
        href={{
          pathname: 'update',
          query: { id: details.id },
        }}
      >
        <a>Edit</a>
      </Link>
      <button>Add To Cart</button>
      <button>Delete</button>
    </div>
  </ItemStyles>
)

export default ItemCard
