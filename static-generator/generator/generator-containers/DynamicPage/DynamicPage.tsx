import React, { useState, useEffect } from 'react';

import ComponentTypes from '../../common/types/component.type'
import TemplateTypes, { initialPageDetailData } from '../../common/types/template.type'
import TemplateService from '../../common/services/template.service'

import DynamicComponent from '../../generator-components/DynamicComponent'
import DynamicLayout from '../../generator-layouts/DynamicLayout'

export interface DynamicPageProps {
  pageConfig?: TemplateTypes.PageConfig
}

const DynamicPage: React.FC<DynamicPageProps> = (props) => {
  const { pageConfig } = props
  const [pageDetail, setPageDetail] = useState<TemplateTypes.PageDetail>(initialPageDetailData)
  useEffect(() => {
    (async () => {
      const pageDetail: TemplateTypes.PageDetail
        = await TemplateService.getPageDetail(pageConfig)
      setPageDetail(pageDetail)
    })()
  }, [pageConfig])
  return (
    <DynamicLayout {...pageDetail.layout} >
      {pageDetail.components.map((data: ComponentTypes.ComponentBase, idx: number) => 
        <DynamicComponent
          key={`${pageDetail.path}-component-${idx}`}
          componentData={data}
        />
      )}
    </DynamicLayout>
  );
}
export default DynamicPage;