import React, {useEffect, useState} from 'react';
import Main from "./Main";
import API from "../../../api/api";


const MainContainer: React.FC = () => {
  const [opers, setOpers] = useState([]);

  useEffect(() => {
    API.getOperators().then(data => setOpers(data))
  }, [])

  return <Main opers={opers} />
}

export default MainContainer;