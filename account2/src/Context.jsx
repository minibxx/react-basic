import axios from 'axios';
import {createContext, useEffect, useReducer} from 'react';
export const MyContext = createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case 'post' : return [...state, action.d];
        case 'put' : return state.map(obj => {
                if(obj.id == action.d.id){
                    obj.price = action.d.price;
                    obj.text = action.d.text;
                    obj.date = action.d.date;
                } 
                return obj;
            }) 
        case 'del' : return state.filter(obj => obj.id != action.d);
        default : return action.d;
    }
}

function Context({children}) {
    const [data,dispatch] = useReducer(reducer, []);

    const instance = axios.create({
        baseURL: 'http://localhost:3030/history'
    });

    // const fetchFn = () => {
    //     axios.get('http://localhost:3030/history')
    //     .then(res=>{ // 데이터를 json 에 요청?!
    //         dispatch({type: 'get', d:res.data}) //해당 데이터를 get 타입으로 d에 넣겠다 ...
    //     })
    // }

    const fetchFn = async (type, data) => { //함수를 실행시키는 시점에 type,data 를 인자값으로 넘겨줌 
        let res;
        switch(type){
            case 'post' : 
              res = await instance.post('/',data);
              break;
            case 'put' : 
              res = await instance.put(`/${data.id}`,data); 
              break;
            case 'del' : 
            res = await instance.delete(`/${data}`);
              res = {data}; //삭제한 데이터,, 모르겠음 미안해
              break;
            default : 
              res = await instance.get('/');
        }
    
        dispatch({type, d:res.data}) //해당 데이터를 get 타입으로 d에 넣겠다 ...
        //키와 값이 동일할 때  
    }

    useEffect(()=>{
        fetchFn()
    },[]) // useEffect로 렌더링이 여러번 일어나도 한번만 실행시킴

    console.log(data);
    return (
        <MyContext.Provider value={{data,fetchFn}}>
            {children}
        </MyContext.Provider>
    )
}

export default Context