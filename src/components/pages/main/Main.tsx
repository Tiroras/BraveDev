import React from 'react';
import OperatorsList from "./operators-list/OperatorsList";
import withHeader from "../../../utilities/hocs/withHeader";
import {TOperators} from "../../../utilities/interfaces/Operators.types";
import {ListHeader, MainBlock} from "./Main.styles";


const Main: React.FC<TOperators> = (props) => {
  return(
    <MainBlock>
      <ListHeader>Список операторов</ListHeader>
      <div className="operators_list">
        <OperatorsList opers={props.opers} />
      </div>
    </MainBlock>
  )
}

export default withHeader(Main);