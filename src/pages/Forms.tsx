import {useForm, Form} from 'forms'
import {SelectOption, Button, Select, Card} from 'ui/base'
import {FieldText} from 'ui/forms'

interface LoginValues {
  login: string
  password: string
}
const loginValues: LoginValues = {
  login: '',
  password: '',
}

const loginOptions: SelectOption[] = [
  {label: 'Email', value: 'e'},
  {label: 'SSO', value: 'e'},
]

const LoginForm = () => {
  const form = useForm<LoginValues>({
    initialValues: loginValues,
    validate(vals, errors) {
      if (!vals.login) errors.login = 'Поле обязательное'

      return errors
    },
  })

  return (
    <Form {...form} onSubmit={values => console.log('values', values)}>
      <FieldText name="login" label="Логин" />
      <FieldText name="password" label="Пароль" type="password" />
      <Select label="Тип входа" value={loginOptions[0]} options={loginOptions} />
      <Button>Войти</Button>
    </Form>
  )
}

export const Forms = () => (
  <Card>
    <LoginForm />
  </Card>
)
