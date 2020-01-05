import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom"

import Builder from '../containers/Builder/Builder'

export interface BuildRouterProps {}

const BuildRouter: React.FC<BuildRouterProps> = () => {
  return (
    <Switch>
      <Route path="/" component={Builder}/>
    </Switch>
  );
}

export default BuildRouter;
export { BuildRouter }
