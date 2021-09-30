import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error} = userSignin;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [userInfo, redirect, props.history])
    return (
        <div className="">
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign in</h1>
                </div>
                { loading && <LoadingBox></LoadingBox>}
                { error && <MessageBox variant='alert-danger'>{error}</MessageBox>}
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required onChange={(e) =>
                            setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required onChange={(e) =>
                            setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="check cart" type="submit">Sign in</button>
                </div>
                <div>
                    <label />
                    <div className="form_base">
                        Don't have an account?  <Link className="back" to={`/register?redirect=${redirect}`}>Sign Up</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
