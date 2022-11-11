import { RegularText, TitleText } from '../../styles/themes/global'
import { CounterInput } from '../CounterInput'
import {
  AddCartCounter,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { formatPrice } from '../../utils/FormatPrice'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedPrice = formatPrice(coffee.price)

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartCounter>
          <CounterInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartCounter>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
