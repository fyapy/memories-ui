<script setup lang="ts">
import { useForm, Form } from '../forms';
import {FieldText} from '../ui/forms'
import {Button} from '../ui/base/Button'
import {Card} from '../ui/base/Card'

interface LoginValues {
  login: string
  password: string
}
const loginValues: LoginValues = {
  login: '',
  password: '',
}

// const loginOptions: SelectOption[] = [
//   {label: 'Email', value: 'e'},
//   {label: 'SSO', value: 'e'},
// ]

useForm<LoginValues>({
  initialValues: loginValues,
  validate(vals, errors) {
    if (!vals.login) errors.login = 'Поле обязательное'

    return errors
  },
})
</script>

<template>
  <Card>
    <Form :submit="values => console.log('values', values)">
      <FieldText name="login" label="Логин" />
      <FieldText name="password" label="Пароль" type="password" />

      <Button>Войти</Button>
    </Form>
  </Card>
</template>
