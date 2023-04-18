
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../actions/authActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';

const Signup = () => {
    const { isAuthenticated } = useSelector((state) => state.authReducer)
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirm_password: '',

    })

    const { username, email, phone, address, password, confirm_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onClick = (e) => {
        e.preventDefault();
        dispatch(register({
            username: username,
            email: email,
            phone: phone,
            address: address,
            password: password,
        }))
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
                <div className="login-form animate__animated animate__zoomIn animate__fast">
                    <h3 style={{marginBottom: '1.5rem'}}>Sign Up</h3>
                    <form onSubmit={e => onClick(e)} className="signup-form">
                        <div>
                            <input
                                className="signup-input"
                                type="text"
                                name="username"
                                value={username}
                                placeholder="Username"
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                className="signup-input"
                                type="text"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                className="signup-input"
                                type="text"
                                name="address"
                                value={address}
                                placeholder="Address"
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                className="signup-input"
                                type="number"
                                name="phone"
                                value={phone}
                                placeholder="Phone"
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                className="signup-input"
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                className="signup-input"
                                type="password"
                                name="confirm_password"
                                value={confirm_password}
                                placeholder="Confirm Password"
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                        <div style={{ width: '100%', marginTop: '1.5rem' }}>
                            <button className="signup-button">Signup</button>
                        </div>
                    </form>
                    <div className="sign-in-redirect">
                        <div className="container">
                            <div className="line"></div>
                            <div className="text">or</div>
                            <div className="line"></div>
                        </div>
                        <Link to={'/login'} style={{ textDecoration: 'none' }}>
                            <span className="login-redirect">Sign in<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '0.3rem' }} /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;