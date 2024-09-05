import {Dashboard} from 'pages/Dashboard'
import {Buttons} from 'pages/Buttons'
import {Route} from 'router'

export const App = () => (
  <Dashboard>
    <Route path="/" component={Buttons} />
  </Dashboard>
)
