import {ButtonLink, Button, Card} from 'ui/base'
import {useRouter} from 'router'

export const Buttons = () => {
  const {navigate} = useRouter()

  return (
    <Card>
      <Button>Создать default</Button>
      <Button margin="20px 0">Создать margin</Button>
      <Button fluid>Создать fluid</Button>
      <ButtonLink to="/tables" margin="20px 0" navigate={navigate}>navigate table</ButtonLink>
      <ButtonLink to="https://google.com">redirect google.com</ButtonLink>
    </Card>
  )
}
