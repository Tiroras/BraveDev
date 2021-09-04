import React from 'react';
import Image from 'next/image';
import {TOperator} from "../../../../utilities/interfaces/Operators.types";
import {OperatorBlock, OperatorImage, OperatorName} from "./OperatorListItem.styles";
import Link from "next/link";


const OperatorListItem: React.FC<TOperator> = (props) => {
  return(
    <Link href={`/payment/${props.id}`}>
      <a>
        <OperatorBlock>
          <OperatorImage>
            <Image src={props.image} alt={props.header} width="120px" height="120px" />
          </OperatorImage>
          <OperatorName>
            {props.header}
          </OperatorName>
        </OperatorBlock>
      </a>
    </Link>
  )
}

export default OperatorListItem;