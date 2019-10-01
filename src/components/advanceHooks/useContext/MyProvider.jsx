import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

const MyProvider = (props) => {
    const [state, setState] = useState({
      data: [
        {
          name: 'Lost Chameleon - Genesis',
        },
        {
          name: 'The Hipsta - Shaken Soda',
        },
        {
          name: 'Tobu - Such Fun',
        },
      ],
    });

    useEffect(() => {
      console.log('change in state', state)
    }, [state]);

    return (
      <MyContext.Provider value={[state, setState]}>
        {props.children}
      </MyContext.Provider>
    );
  };

  export { MyProvider, MyContext }