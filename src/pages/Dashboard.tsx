import {ComponentChildren} from 'preact'
import {Sidebar} from 'ui/complex'
import {Container} from 'ui/base'
import {useRouter} from 'router'
import {style} from 'styles'

const article = style({
  padding: '36px 0 36px 36px',

  flex: '1',
  display: 'flex',
  flexDirection: 'column',
})

const links = [
  {to: '/', text: 'Кнопки'},
  {to: '/forms', text: 'Формы'},
  {to: '/inputs', text: 'Инпуты'},
  {to: '/tables', text: 'Таблицы'},
  {onClick: () => console.log('logout'), text: 'Выйти'},
]

export const Dashboard = ({children}: {children: ComponentChildren}) => {
  const {pathname, navigate} = useRouter()

  return (
    <Container>
      <Sidebar links={links} pathname={pathname} navigate={navigate} />

      <div class={article()}>
        {children}
      </div>
    </Container>
  )
}
