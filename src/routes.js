import React from "react"
import { Route, Switch } from "react-router-dom"

const Root = React.lazy(() => import("src/pages/root/root"))
const Routes = () => {
  return (
    <Switch>
      <Route
        path="/"
        component={() => (
          <React.Suspense fallback={null}>
            <Root />
          </React.Suspense>
        )}
        exact
      />
    </Switch>
  )
}

export default Routes
