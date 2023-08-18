import {createContext, useReducer, useState} from 'react'
const MyContect = createContext();

const reducer = (state, action)=>{
    switch(action.type){
        case 'insert' : return [...state, action.data];
   }
} // 인서트 타입으로 content, email, id, name 받고 있음 .. d 객체가 넘어옴
function Context({children}) {
    
    const [data, dispatch] = useReducer(reducer, []);

  return (
    <MyContect.Provider value={ {data, dispatch} }>
        {children}
    </MyContect.Provider>
  )
}

export {MyContect, Context}