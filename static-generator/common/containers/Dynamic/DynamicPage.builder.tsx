import React, { useState, useEffect } from 'react';

import CustomComponentTypes from '../../types/customComponent.type'
import TemplateTypes, { initialPageDetailData } from '../../types/template.type'
import TemplateService from '../../services/template.service'
import BuildingTools from '../../containers/BuildingTools'

import DynamicComponentBuilder from './DynamicComponent.builder'
import DynamicLayoutBuilder from './DynamicLayout.builder'

export interface DynamicPageBuilderProps {
  pageConfig?: TemplateTypes.PageConfig
}

const DynamicPageBuilder: React.FC<DynamicPageBuilderProps> = (props) => {
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
    <DynamicLayoutBuilder
        build
        buildingTools={BuildingTools}
        layoutData={pageDetail.layout}
    >
      {pageDetail.components.map((data: CustomComponentTypes.CustomComponentBase, idx: number) => 
        <DynamicComponentBuilder
          key={`${pageDetail.path}-component-${idx}`}
          build
          buildingTools={BuildingTools}
          componentData={data}
        />
      )}
    </DynamicLayoutBuilder>
  );
}
export default DynamicPageBuilder;