import React from 'react'
import { Route, Switch } from 'react-router'

/**View */
import Users from './view/Users'


const App = () => {
  return (
    <>
    <Switch>
      <Route path='/' component={Users}/>
    </Switch>
    </>
  )
}

export default App
