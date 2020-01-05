import * as React from 'react'
import { useState, useEffect } from 'react'
import DynamicLayout from '../generator-layouts/DynamicLayout'
import TemplateService from '../services/template.service'
import LayoutTypes, { initialLayoutData } from '../types/layout.type'
import { Layers } from '@material-ui/icons'

const Home = () => {
  const [layout, setLayout] = useState<LayoutTypes.Layout>(initialLayoutData)
  useEffect(() => {
    (async () => {
      const pageData = await TemplateService.getPageDetail()
      setLayout(pageData.pageLayout)
    })()
  }, [])
  return (
    <DynamicLayout
      {...layout}
    >
      <h1>Hello world!</h1>
    </DynamicLayout>
  );
}

export default Home;