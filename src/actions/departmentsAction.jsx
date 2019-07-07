import { FETCH_DEPARTMENTS } from './actionType';

const baseurl = 'https://backendapi.turing.com'

export const fetchDepartments = (url = `${baseurl}/departments`) => dispatch => fetch(url, {
  method: 'GET',
})
  .then(res => res.json())
  .then(data => dispatch({
    type: FETCH_DEPARTMENTS,
    payload: data,
  }));