import React from 'react'

// import UnicornPageContainer from "./containers/UnicornPageContainer"
// import UnicornShowContainer from "./containers/UnicornShowContainer"

import { BrowserRouter, Route, Switch } from "react-router-dom"

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        // <Route exact path="/unicorns" component={UnicornPageContainer}/>
        // <Route exact path="/unicorns/:id" component={UnicornShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
