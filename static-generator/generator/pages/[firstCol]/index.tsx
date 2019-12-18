import { useState, useEffect } from 'react'

import ComponentTypes, { initialComponentData } from '../../types/component.type'
import LayoutTypes, { initialLayoutData } from '../../types/layout.type'
import TemplateTypes from '../../types/template.type'
import TemplateService from '../../services/template.service'
import { useRouter, nextUseRouter } from '../../utilities/router.util'

import DynamicComponent from '../../components/DynamicComponent'
import DynamicLayout from '../../layouts/DynamicLayout'

export interface FirstColProps {
}
const FirstCol: React.FC<FirstColProps> = () => {
  const router = useRouter()
  const { firstCol } = router.pageConfig
  const [componentData, setComponentData] = useState<ComponentTypes.Component>(initialComponentData)
  const [layoutData, setLayoutData] = useState<LayoutTypes.Layout>(initialLayoutData)
  useEffect(() => {
    (async () => {
      const pageConfig: TemplateTypes.PageConfig = {
        firstCol,
      }
      const { pageDetail, pageLayout }: TemplateTypes.PageDetail
        = await TemplateService.getPageDetail(pageConfig)
      setComponentData(pageDetail)
      setLayoutData(pageLayout)
    })()
  }, [firstCol])
  return (
    <DynamicLayout {...layoutData} >
      <DynamicComponent
        componentData={componentData}
      />
    </DynamicLayout>
  );
}
export default FirstCol;