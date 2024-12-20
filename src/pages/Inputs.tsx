import {Input, Card} from 'lib'

export const Inputs = () => (
  <Card>
    <Input placeholder="Введите номер" />
    <Input label="Имя" placeholder="Введите имя" error="Ошибка валидации" />
    <Input label="Описание" placeholder="Введите описание" textarea />
  </Card>
)
