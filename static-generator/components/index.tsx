import TemplateService from '../services/template.service'

export interface DynamicComponentProps {
  firstCol?: string
  firstItem?: string
  secondCol?: string
  secondItem?: string
  thirdCol?: string
  thirdItem?: string
}

const DynamicComponent: React.SFC<DynamicComponentProps> = ({
  firstCol,
  firstItem,
  secondCol,
  secondItem,
  thirdCol,
  thirdItem,
}) => {
  const { uuid, ...others } = await TemplateService.getPageDetail({
    firstCol,
    firstItem,
    secondCol,
    secondItem,
    thirdCol,
    thirdItem,
  })
  return (  );
}

export default DynamicComponent;