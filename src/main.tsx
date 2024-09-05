import {render} from 'preact'
import {Router} from 'router'
import './styles/main.scss'
import {App} from './App'

render(
  <Router onStart={() => {}} onEnd={() => {}}>
    <App />
  </Router>,
  document.getElementById('app')!,
)
