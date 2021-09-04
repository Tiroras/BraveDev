import React from 'react';
import {TOperator} from "../../../utilities/interfaces/Operators.types";
import PaymentFormContainer from "./form/PaymentForm.container";
import {PaymentBlock, PaymentHeader} from "./Payment.styles";


interface IProps {
  oper: TOperator;
}

const Payment: React.FC<IProps> = (props) => {
  return(
    <PaymentBlock>
      <PaymentHeader>
        Оплата услуг оператора {props.oper.header}
      </PaymentHeader>
      <div>
        <PaymentFormContainer operator_id={props.oper.id}/>
      </div>
    </PaymentBlock>
  )
}

export default Payment;