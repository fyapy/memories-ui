import {Dashboard} from 'pages/Dashboard'
import {Buttons} from 'pages/Buttons'
import {Inputs} from 'pages/Inputs'
import {Tables} from 'pages/Tables'
import {Forms} from 'pages/Forms'
import {Route} from 'router'

export const App = () => (
  <Dashboard>
    <Route path="/" component={Buttons} />
    <Route path="/forms" component={Forms} />
    <Route path="/inputs" component={Inputs} />
    <Route path="/tables" component={Tables} />
  </Dashboard>
)
