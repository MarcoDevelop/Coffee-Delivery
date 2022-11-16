import { RegularText } from '../../styles/themes/global'
import { CounterInput } from '../CounterInput'
import { ActionsContainer, CoffeeCartContainer, RemoveButton } from './styled'
import { Trash } from 'phosphor-react'

export function CoffeeCart() {
  return (
    <CoffeeCartContainer>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1669593600&Signature=EOGbXQYBeqYX1C7GcMygyM0XJaqbOU3ydZiPqL-NY6aHiskkr5FHMDc8QkVgOtGsiimXJJcmgjCy6XxHHUQcEHd1acupWJNluTrZXcnUpXvk0n6xEb5bBv6nQrioxaAGeaBA1L9Rd35dPGSi2ciwfqNKI7EctYFJ1qwJglnEqKW8bylgmjPXr6IEAXuZ2f4gRujfM~ikF64yMxA8i1TBrnpm4iPJqQ8dKZy3ncRYbjDnkyYWX-ngs51EbpbIkS5gsWuiafbgBmdCqEuso-t~lO0noqAiQ9lAS7mdfhvqrAsclTTn8gIXaDm--CciazC0p83m03Mf3YqLy-M9Sin8QA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <CounterInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeeCartContainer>
  )
}
