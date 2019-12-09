import { useState, useEffect } from 'react'
import PortfolioLayout from '../layouts/portfolio/index'
import TemplateService from '../services/template.service'
import LayoutTypes from '../types/layout.type'

const Home = () => {
  const [header, setHeader] = useState<LayoutTypes.header>()
  const [footer, setFooter] = useState<LayoutTypes.footer>()
  useEffect(() => {
    (async () => {
      setHeader(await TemplateService.header())
      setFooter(await TemplateService.footer())
    })()
  }, [])
  return (
    <PortfolioLayout
      header={header}
      footer={footer}
    >
      <h1>Hello world!</h1>
    </PortfolioLayout>
  );
}

export default Home;