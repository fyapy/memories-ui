import {Dashboard} from 'pages/Dashboard'
import {Buttons} from 'pages/Buttons'
import {Tables} from 'pages/Tables'
import {Route} from 'router'

export const App = () => (
  <Dashboard>
    <Route path="/" component={Buttons} />
    <Route path="/tables" component={Tables} />
  </Dashboard>
)
