import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/authActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

const Login = () => {
    const { isAuthenticated } = useSelector((state) => state.authReducer)
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onClick = () => {
        dispatch(login(email, password))
    }

    useEffect(() => {
        if (isAuthenticated) {
            window.location.replace('/member')
        }
    }, [dispatch, isAuthenticated])

    return (
        <div className="login-page">
            <div className="left-image"></div>
            <div className="right-inputs">
                <div className="login-form">
                    <h3>Login</h3>
                        <input 
                        className="email-input"
                        type="text"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => onChange(e)}
                            />
                        <input type="password"
                        className="password-input"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => onChange(e)}
                            />
                    <div className="forgot-password">
                        <span>Forgot password?</span>
                    </div>
                    <div style={{width: '100%'}}>
                        <button className="login-button" onClick={onClick}>Login</button>
                    </div>
                    <div className="no-account">
                        <p className="no-account-header">Not have account ?</p>
                        <Link to={'/signup'} style={{textDecoration: 'none'}}>
                            <span className="signup-redirect">Create your Account<FontAwesomeIcon icon={faArrowRight} style={{marginLeft: '0.3rem'}} /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;