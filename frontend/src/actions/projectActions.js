import { PROJECT_DETAILS_FAIL, PROJECT_DETAILS_REQUEST, PROJECT_DETAILS_SUCCESS, PROJECT_LIST_FAIL, PROJECT_LIST_REQUEST, PROJECT_LIST_SUCCESS } from "../constants/projectConstants";
import Axios from 'axios';

export const listProjects = () => async (dispatch) => {
    dispatch({
        type: PROJECT_LIST_REQUEST
    });

    try {
        const { data } = await Axios.get('/api/projects');
        dispatch({
            type: PROJECT_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PROJECT_LIST_FAIL,
            payload: error.message
        })
    }
};

export const detailsProject = (projectId) => async (dispatch) => {
    dispatch({
        type: PROJECT_DETAILS_REQUEST,
        payload: projectId
    });
    try {
        const { data } = await Axios.get(`/api/projects/${projectId}`)
        dispatch({
            type: PROJECT_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PROJECT_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,


        })
    }
}