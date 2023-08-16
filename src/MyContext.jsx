import React, { createContext, useState } from 'react'
export const DataContext = createContext(null); //외부에서 사용 가능

function MyContext({children}) {
    const [data,setData] = useState([]);

    return (
      <DataContext.Provider value={{data,setData}}>
          {children}
      </DataContext.Provider>
    )
  }
  
  export default MyContext
  //DataContext랑 MyContext (2개) 내보내기, 둘 다 쓸 수 있음