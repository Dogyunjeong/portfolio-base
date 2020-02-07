import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { BUILDER_BASE } from '../configs/domain.config'

import { BuildRouter } from './BuildRouter'

export interface IndexRouterProps {}

const IndexRouter: React.FC<IndexRouterProps> = () => {
  return (
    <Switch>
      <Route path={BUILDER_BASE || '/base'} component={BuildRouter}/>
    </Switch>
  );
}

export default IndexRouter;
export { IndexRouter }
