import React from 'react'

import { BrowserRouter, Route, Switch } from "react-router-dom"

// import UnicornPageContainer from "./UnicornPageContainer"
// import UnicornShowContainer from "./UnicornShowContainer"

import UnicornIndexContainer from "./UnicornIndexContainer"

const App = (props) => {
  return(
    <UnicornIndexContainer />
  )
}

export default App








// <BrowserRouter>
//   <Switch>
//     <Route exact path="/" component={UnicornPageContainer} />
//     <Route exact path="/unicorns" component={UnicornPageContainer} />
//     <Route exact path="/unicorns/:id" component={UnicornShowContainer} />
//   </Switch>
// </BrowserRouter>
