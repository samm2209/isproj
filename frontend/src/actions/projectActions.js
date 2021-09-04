import { PROJECT_LIST_FAIL, PROJECT_LIST_REQUEST, PROJECT_LIST_SUCCESS } from "../constants/projectConstants";
import Axios from 'axios';

export const listProjects = () => async (dispatch) => {
    dispatch({
        type: PROJECT_LIST_REQUEST
    });

    try {
        const { data } = await Axios.get('/api/projects');
        dispatch({
            type:PROJECT_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PROJECT_LIST_FAIL,
            payload: error.message
        })
    }
}