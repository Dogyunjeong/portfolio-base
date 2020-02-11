import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import TemplateTypes, { initialPageDetailData } from '../types/template.type'
import TemplateService from '../services/template.service'

export const usePageDetail = (pageConfig: TemplateTypes.PageConfig) => {
  const [pageDetail, setPageDetail] = useState<TemplateTypes.PageDetail>(initialPageDetailData)
  useEffect(() => {
    (async () => {
      const pageDetail: TemplateTypes.PageDetail
        = await TemplateService.getPageDetail(pageConfig)
      setPageDetail(pageDetail)
    })()
  }, [pageConfig])
  return pageDetail
}

export const usePageConfig = (): TemplateTypes.PageConfig => {
  const location = useLocation()
  const pageConfig: TemplateTypes.PageConfig = TemplateService.urlToPageConfig(location.pathname)
  return pageConfig
}