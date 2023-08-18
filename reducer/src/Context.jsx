import {createContext, useReducer, useState} from 'react'
const MyContect = createContext();

const reducer = (state, action)=>{
    switch(action.type){
        case 'insert' : return state 수 정;
    }
}

function Context({children}) {

  const [data, dispatch] = useReducer(reducer, []);

  return (
    <MyContect.Provider value={ {data, dispatch} }>
        {children}
    </MyContect.Provider>
  )
}

export {MyContect, Context}