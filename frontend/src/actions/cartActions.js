import Axios from "axios"
import { CART_REMOVE_ITEM, CART_SUPPORT_PROJECT } from "../constants/cartConstants";

export const supportProject = (projectId) => async(dispatch, getState) =>{
    const {data} = await Axios.get(`/api/projects/${projectId}`);
    dispatch({
        type: CART_SUPPORT_PROJECT,
        payload:{
            name: data.name,
            image: data.image,
            organiser: data.organiser,
            project: data._id
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (projectId) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,  
        payload: projectId  
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}