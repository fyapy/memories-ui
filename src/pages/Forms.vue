<script setup lang="ts">
import {FieldSelect, FieldEditor, FieldText} from '../ui/forms'
import {type SelectOption, Button, Card} from '../ui/base'
import {useForm, Form} from '../forms'

const typeOptions: SelectOption[] = [
  {label: 'Email', value: 'e'},
  {label: 'SSO', value: 's'},
]

interface LoginValues {
  login: string
  password: string
  type: SelectOption
  content: any[]
}
const loginValues: LoginValues = {
  login: '',
  password: '',
  type: typeOptions[0],
  content: [],
}

const {isSubmitting} = useForm<LoginValues>({
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
    <Form :submit="values => console.log('values', isSubmitting, values, values.content)">
      <FieldText name="login" label="Логин" placeholder="Введите логин" />
      <FieldText name="password" label="Пароль" placeholder="Введите пароль" type="password" />
      <FieldSelect name="type" label="Тип" :options="typeOptions" />

      <FieldEditor name="content" label="Блочный редактор" />

      <Button :disabled="isSubmitting">Войти</Button>
    </Form>
  </Card>
</template>
