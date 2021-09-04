import React, {Component, PropsWithChildren} from 'react';
import Header from "../../components/header/Header";


const withHeader = <P extends object>(Component: React.ComponentType<P>) => {
  const witHeaderComponent = (props: PropsWithChildren<P>) => {
    return (
      <div>
        <Header/>
        <main>
          <Component {...props} />
        </main>
      </div>
    )
  };

  return witHeaderComponent;
}

export default withHeader;