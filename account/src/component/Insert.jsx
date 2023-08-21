import React, { useRef } from 'react'

function Insert() {
    const elForm = useRef();

    const insertFn = (e)=>{
      e.preventDefault();
      let formdata = new FormData(elForm.current);
      let today = new Date();
      let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
        formdata.append ('date',date)
      let ObjForm = Object.fromEntries(formdata); //이중 배열이 만들어짐, 키와 벨류(객체 형태)
      console.log(ObjForm);
    }

    return (
      <article>
          <h2>Insert</h2>
          <form ref={elForm}>
              <input type="text" name="price"/>
              <textarea name="text"></textarea>
              <button onClick={insertFn}>예금하기</button>
              <button>출금하기</button>
          </form>
      </article>
    )
}


export default Insert