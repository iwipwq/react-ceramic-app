import React, { useContext, useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Clayful from 'clayful/client-js'
import { AuthContext } from '../../context/AuthContext';

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //컨텍스트 불러오기
    const {isAuthenticated} = useContext(AuthContext);
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        var Customer = Clayful.Customer;

        var payload = {
            // userId:   'user_id',
            email,
            password,
        };

        Customer.authenticate(payload, function(err, result) {

            if (err) {
                // Error case
                console.log(err.code);
            }

            var data = result.data;
            
            console.log(data);

            localStorage.setItem('cutomerUid',data.customer)
            localStorage.setItem('accessToken',data.token)

            

            navigate("/")
            isAuthenticated();
        });

    }

    return (
        <div className="auth-wrapper">
            <section>
                <h1 className="sr-only">로그인 페이지</h1>
                <h2><span className="green">로그인</span> 하고 특별한 혜택누리기</h2>
                <p className='gray'>계정을 잊어버리셨나요? <Link to="javascript:void(0)" className="green">같이 찾으러 가요!</Link></p>
                <form onSubmit={handleSubmit}>
                    
                    <label className="gray" for="email">
                        <input 
                        onChange={handleEmailChange} name="email" placeholder="ID를 입력해주세요" type="email" value={email} />
                        
                    </label>
                    
                    <label className="gray" for="email">
                        <input 
                        onChange={handlePasswordChange} placeholder="비밀번호를 입력해주세요" type="password" value={password} />
                        아기사자 ID는 심바, 사바나, 치타는웃고있다 서비스에 로그인할때 사용되는 Email 주소에요.
                    </label>
                    <p className='gray'>아기사자 서비스가 처음이신가요?<Link to="register" className="green"> 계정 만들러가기!</Link></p>
                    <button type="submit">VVIP 나가신다!</button>
                </form>
            </section>
        </div>
    )
}

export default LoginPage
