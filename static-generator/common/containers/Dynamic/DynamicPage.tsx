import React, { useState, useEffect } from 'react';

import CustomComponentTypes from '../../types/customComponent.type'
import TemplateTypes, { initialPageDetailData } from '../../types/template.type'
import TemplateService from '../../services/template.service'

import DynamicComponent from './DynamicComponent'
import DynamicLayout from './DynamicLayout'

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
      {pageDetail.components.map((data: CustomComponentTypes.CustomComponentBase, idx: number) => 
        <DynamicComponent
          key={`${pageDetail.path}-component-${idx}`}
          componentData={data}
        />
      )}
    </DynamicLayout>
  );
}
export default DynamicPage;