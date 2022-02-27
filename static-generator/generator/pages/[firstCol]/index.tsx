import * as React from "react";
import { useRouter } from "../../utilities/router.util";

import DynamicPage from "../../common/containers/Dynamic/DynamicPage";

export interface FirstColProps {}
const FirstCol: React.FC<FirstColProps> = () => {
  const router = useRouter();
  const { firstCol } = router.pageConfig;
  return <DynamicPage pageConfig={{ firstCol }} />;
};
export default FirstCol;
