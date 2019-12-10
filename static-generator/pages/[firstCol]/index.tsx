import TemplateService from '../../services/template.service'
import { useRouter } from '../../utilities/router.util'

export interface FirstColProps {
}
const FirstCol: React.FC<FirstColProps> = () => {
  const router = useRouter()
  const { firstCol } = router.query
  return (
    <div>
      {firstCol}
    </div>
  );
}
export default FirstCol;