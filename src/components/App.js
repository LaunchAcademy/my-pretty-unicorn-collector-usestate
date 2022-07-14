import React from "react"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornListPage from "./UnicornListPage"
import UnicornDetailsPage from "./UnicornDetailsPage"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UnicornListPage} />
        <Route exact path="/unicorns" component={UnicornListPage} />
        <Route exact path="/unicorns/:id" component={UnicornDetailsPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
