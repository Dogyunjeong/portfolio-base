import React, { useState, useEffect } from 'react';

import ComponentTypes, { initialComponentData } from '../../types/component.type'
import LayoutTypes, { initialLayoutData } from '../../types/layout.type'
import TemplateTypes from '../../types/template.type'
import TemplateService from '../../services/template.service'

import DynamicComponent from '../../generator-components/DynamicComponent'
import DynamicLayout from '../../generator-layouts/DynamicLayout'

export interface DynamicPageProps {
  pageConfig?: TemplateTypes.PageConfig
}

const DynamicPage: React.FC<DynamicPageProps> = (props) => {
  const { pageConfig } = props
  const [componentData, setComponentData] = useState<ComponentTypes.Component>(initialComponentData)
  const [layoutData, setLayoutData] = useState<LayoutTypes.Layout>(initialLayoutData)
  useEffect(() => {
    (async () => {
      const { pageDetail, pageLayout }: TemplateTypes.PageDetail
        = await TemplateService.getPageDetail(pageConfig)
      setComponentData(pageDetail)
      setLayoutData(pageLayout)
    })()
  }, [pageConfig])
  return (
    <DynamicLayout {...layoutData} >
      <DynamicComponent
        componentData={componentData}
      />
    </DynamicLayout>
  );
}
export default DynamicPage;