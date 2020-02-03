import React, { useState, useEffect } from 'react'

import FormattedList, { ListData } from '../../common/components/List/FormattedList'
import TextInput from '../../common/components/Input/TextInput'
import { Button } from '../../common/components/Button'
import { t } from '../../common/utilities/i18n.util'
import _ from '../../common/utilities/lodash.util'
import TemplateService from '../../common/services/template.service'

export interface PageBuilderProps {
}
const parseUrlList = (urlList: {[key:string]: any }, keys: string[] = [], setAddingUrl: Function): ListData[] => {
  const formattedList: ListData[] = []
  Object.keys(urlList).forEach((key) => {
    const listData: ListData = {
      primary: `/${key}`,
      secondaryAction: <Button onClick={() => setAddingUrl(keys)} >Add page</Button>
    }
    if (Object.keys(urlList[key]).length > 0) {
      listData.listData = parseUrlList(urlList[key], [...keys, key], setAddingUrl)
    }
    formattedList.push(listData)
  })
  return formattedList
}
const getFormattedList = _.memoize((urlList, setAddingUrl) => {
  if (!urlList || Object.keys(urlList).length === 0)
    return
  const formattedList: ListData[] = parseUrlList(urlList, [], setAddingUrl)
  return formattedList
})

const PageBuilder: React.SFC<PageBuilderProps> = () => {
  const [urlList, setUrlList] = useState()
  const [addingUrl, setAddingUrl] = useState()
  const [url, setUrl] = useState()

  useEffect(() => {
    (async () => {
      const list = await TemplateService.getPageList()
      setUrlList(list)
    })()
    return
  }, [])

  const handleAddPage = async () => {
    await TemplateService.addPage({}, url)
  }

  const formattedList = getFormattedList(urlList, setAddingUrl)

  return (
    <>
      <FormattedList
        listData={formattedList}
      />
      {addingUrl && (
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