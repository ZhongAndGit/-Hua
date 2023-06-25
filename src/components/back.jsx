import { useNavigate } from 'react-router-dom';
import MyIcon from './icon'

function Back(props) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return <MyIcon type={'icon-fanhui-white'} className="icon" onClick={handleGoBack} />
}

export default Back
