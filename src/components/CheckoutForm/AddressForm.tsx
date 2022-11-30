import { Input } from '../Input'
import { AddressFormContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

interface Address {
  cep: number
  street: string
  number: string
  complement: string
  district: string
  city: string
  uf: string
}

export function AddressForm() {
  // Buscando informações API
  const [address, setAddress] = useState<Address[]>([])
  const [zipCode, setZipCode] = useState()

  function loadAddress() {
    axios.get(`https://viacep.com.br/ws/06719680/json/`).then((response) => {
      setAddress(response.data)
    })

    console.log(address)
  }

  // async function loadAddress() {
  //   const response = await fetch(`https://viacep.com.br/ws/06719680/json/`)
  //   const data = await response.json()
  //   setAddress(data)
  //   console.log(address)
  // }

  useEffect(() => {
    loadAddress()
  }, [])

  //

  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input placeholder="UF" {...register('uf')} error={errors.uf?.message} />
    </AddressFormContainer>
  )
}
