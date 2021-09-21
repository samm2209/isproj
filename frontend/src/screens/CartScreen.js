import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, supportProject } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    const projectId = props.match.params.id;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        if (projectId) {
            dispatch(supportProject(projectId));
        }
    }, [dispatch, projectId]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const checkOutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }

    return (
        <div className="project cart">
            <div>
                <Link className="back" to="/">Home</Link>
                <div className="name">
                    <h2 className="">Cart</h2>
                </div>
                <div className="left">
                    {cartItems.length === 0 ?
                        <MessageBox>
                            No items in the cart at the moment
                            <Link className="back" to="/">Add items</Link>
                        </MessageBox>
                        :
                        (
                            <ul>
                                {cartItems.map((item) => (
                                    <li key={item.project}>
                                        <div className="wrap">
                                            <div className="cart_left">
                                                <div className="">
                                                    <img src={item.image} alt={item.name} className="small"></img>
                                                </div>
                                                <div className="sub_text">
                                                    <span className="cart_desc">You're supporting  <Link to={`/project/${item.project}`} className="spec">{item.name}</Link></span>
                                                    <p className="cart_desc">Your contribution will benefit  <span className="spec">{item.organiser}</span></p>
                                                </div>
                                                <div>
                                                    <button type="button" className="delete" onClick={() => removeFromCartHandler(item.project)}>Remove</button>
                                                </div>
                                            </div>
                                            <div>
                                                <h4>Pledge amount</h4>
                                                <input type="number" placeholder="amount" id="quantity" min="100" max="100000"
                                                    onChange={e => {
                                                        this.setState({ bid: e.target.value });
                                                        console.log(this.state);
                                                    }}>
                                                </input>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                </div>
            </div>
            <div className="cart_sidebar">
                <div className="name">
                    <h2>Your contribution</h2>
                </div>
                <div className="move">
                    <p>Your pledge</p>
                    <span className="amt">Ksh
                        {

                        }</span>
                </div>
                <div className="move">
                    <p>Tip</p>
                    <span className="amt">Ksh { }</span>
                </div>
                <div className="move">
                    <h4>Total contribution</h4>
                    <span className="amt">Ksh { }</span>
                </div>
                <div className="checkout">
                    <button type="button" className="check" onClick={checkOutHandler} disabled={cartItems.length === 0}>Checkout</button>
                </div>
            </div>
        </div>
    )
}
