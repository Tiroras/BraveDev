import React, {useEffect, useState} from 'react';
import {TOperator} from "../../../utilities/interfaces/Operators.types";
import API from "../../../api/api";
import Payment from "./Payment";
import withHeader from "../../../utilities/hocs/withHeader";


interface IProps {
  id: number;
}

const PaymentContainer: React.FC<IProps> = (props) => {
  const [oper, setOper] = useState<TOperator>({
    id: 0,
    header: "",
    name: "",
    image: ""
  });

  useEffect(() => {
    API.postOperator(props.id).then(data => setOper(data))
  }, [props.id])

  return <Payment oper={oper}/>
}

export default withHeader(PaymentContainer);