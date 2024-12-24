<script setup lang="ts">
import {type SelectOption, Button, Card} from '../ui/base'
import {FieldSelect, FieldText} from '../ui/forms'
import {useForm, Form} from '../forms'

const typeOptions: SelectOption[] = [
  {label: 'Email', value: 'e'},
  {label: 'SSO', value: 's'},
]

interface LoginValues {
  login: string
  password: string
  type: SelectOption
}
const loginValues: LoginValues = {
  login: '',
  password: '',
  type: typeOptions[0],
}

useForm<LoginValues>({
  initialValues: loginValues,
  validate(vals, errors) {
    if (!vals.login) errors.login = 'Поле обязательное'
    if (vals.type?.value !== 's') errors.type = 'Тип логина должен быть SSO'

    return errors
  },
})
</script>

<template>
  <Card>
    <Form :submit="values => console.log('values', values)">
      <FieldText name="login" label="Логин" placeholder="Введите логин" />
      <FieldText name="password" label="Пароль" placeholder="Введите пароль" type="password" />
      <FieldSelect name="type" label="Тип" :options="typeOptions" />

      <Button>Войти</Button>
    </Form>
  </Card>
</template>
