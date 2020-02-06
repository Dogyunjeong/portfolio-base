import React, { useState, useEffect } from 'react'

import FormattedList, { ListData } from '../../common/components/List/FormattedList'
import TextInput from '../../common/components/Input/TextInput'
import { Button } from '../../common/components/Button'
import { t } from '../../common/utilities/i18n.util'
import _ from '../../common/utilities/lodash.util'
import TemplateService from '../../common/services/template.service'
import TemplateTypes from '../../common/types/template.type'

export interface PageBuilderProps {
}
const parseUrlList = (urlList: {[key:string]: any }, keys: string[] = [], setBaseUrlSet: React.Dispatch<string[]>): ListData[] => {
  const formattedList: ListData[] = []
  Object.keys(urlList).forEach((key) => {
    const handleAddingPage = (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setBaseUrlSet([...keys, key])
    }
    const listData: ListData = {
      primary: `/${key}`,
      children: <Button onClick={handleAddingPage} >Add page</Button>
    }
    if (Object.keys(urlList[key]).length > 0) {
      listData.listData = parseUrlList(urlList[key], [...keys, key], setBaseUrlSet)
    }
    formattedList.push(listData)
  })
  return formattedList
}
const getFormattedList = (urlList: TemplateTypes.PageList, setBaseUrlSet: React.Dispatch<string[]>) => {
  if (!urlList || Object.keys(urlList).length === 0)
    return
  const formattedList: ListData[] = parseUrlList(urlList, [], setBaseUrlSet)
  return formattedList
}

const PageBuilder: React.SFC<PageBuilderProps> = () => {
  const [urlList, setUrlList] = useState<TemplateTypes.PageList>({})
  const [baseUrlSet, setBaseUrlSet] = useState<string[]>([])
  const [url, setUrl] = useState('')

  useEffect(() => {
    (async () => {
      const list = await TemplateService.getPageList()
      setUrlList(list)
    })()
    return
  }, [])

  const handleAddPage = (): void => {
    (async () => {
      await TemplateService.addPage(baseUrlSet.join('/'), url)
    })()
  }

  const formattedList = getFormattedList(urlList, setBaseUrlSet)

  return (
    <>
      <FormattedList
        listData={formattedList}
      />
      {baseUrlSet.length > 0 && (
        <>
          <TextInput label="url" onChange={(event) => setUrl(event.target.value)} />
          <Button onClick={handleAddPage} >
            {t('pageBuilder.addPage')}
          </Button>
        </>
      )}
    </>
  )
}

export default PageBuilder;