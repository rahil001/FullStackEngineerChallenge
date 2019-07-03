import axios from 'axios';
import history from '../history';
import { FETCH_EMPLOYEES, LOGIN_DETAILS, FETCH_PERFORMANCE } from './types';

export const loginAction = (name, password) => async (dispatch) => {
    const response = await axios.post('/api/login', {name, password});
    if (response.data.category === "admin") {
        history.push('/admin');
    }
    dispatch({
        type: LOGIN_DETAILS,
        payload: response.data
    })
};

export const employeeFormAction = (values) => async () => {
    const response = await axios.post('/api/addEmployee', values);
    if (response.data.success) {
        window.location.reload();
    }
};

export const getAllEmployees = () => async (dispatch) => {
    const response = await axios.get('/api/getEmployees');
    dispatch({
        type: FETCH_EMPLOYEES,
        payload: response.data
    });
};

export const removeEmployee = (employeeId) => async () => {
    const response = await axios.delete(`/api/removeEmployee/${employeeId}`);
    if (response.data.success) {
        window.location.reload();
    }
};

export const updateEmployee = (employeeId, values) => async () => {
    const response = await axios.put(`/api/updateEmployee/${employeeId}`, values);
    if (response.data.success) {
        window.location.reload();
    }
};

export const addPerfomanceReview = (employeeId, values) => async (dispatch) => {
    const response = await axios.post(`/api/addPerformanceReview/${employeeId}`, values);
    debugger;
    dispatch({
        type: FETCH_PERFORMANCE,
        payload: response.data
    });
};

export default {
    loginAction,
    employeeFormAction,
    getAllEmployees,
    removeEmployee,
    updateEmployee,
    addPerfomanceReview
}
