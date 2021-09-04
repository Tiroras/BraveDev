import React from 'react';
import Link from "next/link";
import {HeaderBlock} from "./Header.styles";


const Header: React.FC = () => {
  return(
    <HeaderBlock>
      <div>
        <Link href="/"><a><h1>Оплата оператора</h1></a></Link>
      </div>
    </HeaderBlock>
  )
}

export default Header;