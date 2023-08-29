import React, { useState, useEffect } from 'react'

const User = {
  email: 'alsdbqls10@gmail.com',
  pw: 'asdf1234!'
}

function Login() {
  const [email,setEmail] = useState('');
  const [pw,setPw] = useState('');

  const [emailValid, setEmailValid] = useState('');
  const [pwValid, setPwValid] = useState('');
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if(emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);


  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if(regex.test(email)){
      setEmailValid(true);
    }else{
      setEmailValid(false);
    }
  }

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if(regex.test(pw)){
      setPwValid(true);
    }else{
      setPwValid(false);
    }
  }

  const onClickConfirmButton = () => {
    if(email === User.email && pw === User.pw) {
      alert('로그인에 성공했습니다.')
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  }


  return (
    <article>
      <div className='page'>
        <div className='titleWrap'>
          이메일과 비밀번호를 <br /> 입력해주세요
        </div>

        <div className='contentWrap'>
          <div className='inputTitle'>이메일 주소</div>
          <div className='inputWrap'>
            <input 
            type="text" 
            placeholder='abc@gmail.com' 
            value={email} 
            onChange={handleEmail} />
          </div>

          <div className='error'>
            {!pwValid && pw.length > 0 && (
              <div>올바른 이메일을 입력하세요</div>
              //이메일이 valid 하지 않을 때, 입력값이 없을 때
            )}
          </div>

          <div className='inputTitle'>비밀번호</div>
          <div className='inputWrap'>
            <input 
            type="text" 
            placeholder='영문, 숫자, 특수기호 포함' 
            value={pw} 
            onChange={handlePw} />
          </div>

          <div className='error'>
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
        </div>
      </div>
      <div>
        <button onClick={onClickConfirmButton} disabled={notAllow}>확인</button>
      </div>
    </article>
  )
}

export default Login