import {ComponentChildren} from 'preact'
import {Container} from 'ui/base/Container'

export const base = '/'

interface Props {
  children: ComponentChildren
}

export const btn = (props: Props) => <Container>123 {console.log(props)}</Container>
