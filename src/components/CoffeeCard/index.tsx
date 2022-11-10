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

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img
        src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1668988800&Signature=Sk7ZA60azRmCT7X36XpcdJp1zmCaGMwk70fA5SMnbq7xOV9uO~dfdVQ73ytJaJ5PfvII1Ikgv~b0g~Tzy0SJVTL1Q1nqK26WwiNjG35-ZPP9w~hRIzKWD1fO83wRgJsSKhkD3RJmmFKENjFeCnMB-iPSZ3MtfEQSA8xZd3J-2yH-w466~FCM6TZRBWZa3Y82ixCgUNZpnrJJ3g-TWvn-BD8zGAcbKiockrPUQE-SOcRh1rR6z~d8WFL7ud1YVrAXYTF5YQL1OgTN9UN-0ewqzUevKXrBHXz5b4lvZ207Ib1X6~PWkI7FMVL-PkMYD-28XIX8E0Y13Xnezx28VBfnYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt=""
      />

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>

      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
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
