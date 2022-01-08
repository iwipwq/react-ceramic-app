import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Clayful from 'clayful/client-js'

function RegisterPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")

    const handleEmailChange = (e) => {
        console.log("e.target.value", e.target.value);
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        var Customer = Clayful.Customer;

        var payload = {
            // userId:   'user_id',
            email:    email,
            password: password,
        };
        console.log('payload', payload);

        Customer.createMe(payload, function(err, result) {

            if (err) {
                // Error case
                console.log(err.code);
            }

            // var data = result.data;

            // console.log(data);

            navigate("/login");
        });
    }

    return (
        <div className="auth-wrapper">
            <section>
                <h1 className="sr-only">회원가입페이지</h1>
                <h2><span className="green">회원가입</span> 하고 특별한 혜택누리기
                    <span className="line-wrap gray">vs</span>
                    <span className="line-wrap lightgray">그냥살기</span></h2>
                <p className='gray'>하나의 ID로 모든 <span className='green'>아기사자</span> 서비스를 이용할 수 있어요!
                    <span className='line-wrap'>이미 계정을 갖고 계신가요? <Link to="login" style={{color : "#2C856A", textDecoration : "none" }}>로그인 하러가기</Link></span>
                </p>
                <form onSubmit={handleSubmit}>
                    
                    <label className="gray" for="email">
                        <input onChange={handleEmailChange} name="email" placeholder="ID를 입력해주세요" type="email" value={email} />
                        새 ID로 사용될 이메일 주소에요.
                    </label>
                    
                    <label className="gray" for="email">
                        <input onChange={handlePasswordChange} placeholder="비밀번호를 입력해주세요" type="password" value={password} />
                        숫자, 기호를 혼합해 주세요.
                    </label>
                    <button type="submit">회원가입할래요. 난 특별하니까.</button>
                </form>
            </section>
        </div>
    )
}

export default RegisterPage
                
