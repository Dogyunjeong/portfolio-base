import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import { BuildRouter } from './BuildRouter'

export interface IndexRouterProps {}

const IndexRouter: React.FC<IndexRouterProps> = () => {
  return (
    <Switch>
      <Route path="/build" component={BuildRouter}/>
    </Switch>
  );
}

export default IndexRouter;
export { IndexRouter }
