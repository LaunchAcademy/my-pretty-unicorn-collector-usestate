import React from 'react'

import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornListPage from "./UnicornListPage"
// import UnicornList from "./UnicornList"
import UnicornDetailsPage from "./UnicornDetailsPage"


const App = (props) => {

  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UnicornListPage} />
          <Route exact path="/unicorns" component={UnicornListPage} />
          <Route exact path="/unicorns/:bananaId" component={UnicornDetailsPage} />
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App





