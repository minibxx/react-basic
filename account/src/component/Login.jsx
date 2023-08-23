import React from 'react'

function login() {
  return (
    <article>
      <div className='page'>
        <div className='titleWrap'>
          이메일과 비밀번호를 <br /> 입력해주세요
        </div>

        <div className='contentWrap'>
          <div className='inputTitle'>이메일 주소</div>
          <div className='inputWrap'>
            <input type="text" placeholder='abc@gmail.com'/>
          </div>
          <div className='error'>올바른 이메일을 입력하세요</div>

          <div className='inputTitle'>비밀번호</div>
          <div className='inputWrap'>
            <input type="text" placeholder='영문, 숫자, 특수기호 포함' />
          </div>
          <div className='error'>특수문자, 숫자가 필요합니다</div>
        </div>
      </div>
      <div>
        <button>확인</button>
      </div>
    </article>
  )
}

export default login