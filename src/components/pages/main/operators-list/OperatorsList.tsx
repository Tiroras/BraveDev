import React from 'react';
import {TOperator, TOperators} from "../../../../utilities/interfaces/Operators.types";
import OperatorListItem from "./OperatorListItem";


const OperatorsList: React.FC<TOperators> = (props) => {
  return(
    <div>
      {props.opers ? props.opers.map((oper: TOperator) => (
        <OperatorListItem
          key={oper.id}
          id={oper.id}
          name={oper.name}
          header={oper.header}
          image={oper.image}
        />
      )) : <div>Извините, здесь ничего нет</div> }
    </div>
  )
}

export default OperatorsList;