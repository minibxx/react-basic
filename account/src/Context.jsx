import {createContext, useEffect, useReducer} from 'react';
import axios from 'axios';
export const MyContext = createContext();

const reducer = (state, action)=>{
    switch(action.type){
        case 'insert' : return;
        case 'modify' : return;
        case 'del' : return;
        default : return action.d ;
    }
}

function Context({children}) {
    const [data,dispatch] = useReducer(reducer, []);

    const fetchFn = () => {
        axios.get('http://localhost:3030/history')
        .then(res=>{ // 데이터를 json 에 요청?!
            dispatch({type: 'get', d:res.data}) //해당 데이터를 get 타입으로 d에 넣겠다 ...
        })
    }
    useEffect(()=>{
        fetchFn()
    },[]) // useEffect로 렌더링이 여러번 일어나도 한번만 실행시킴

    console.log(data);
    return (
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    )
}

export default Context