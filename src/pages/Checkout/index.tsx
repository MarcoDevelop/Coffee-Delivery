import { CheckoutForm } from '../../components/CheckoutForm'
import { CoffeeSelected } from '../../components/CoffeeSelected'
import { CheckoutContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CheckoutForm />
        <CoffeeSelected />
      </CheckoutContainer>
    </FormProvider>
  )
}
