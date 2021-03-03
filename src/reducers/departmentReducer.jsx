import { FETCH_DEPARTMENTS } from '../actions/actionType';

const initialState = {
    "departments":[],
    'errors':{}
};

  const departmentsReducer = (state = initialState, action) => {
      //console.log(action);
      
    switch (action.type) {
      case FETCH_DEPARTMENTS:
      return { ...state, departments: action.payload };
      default:
      return state;
    }
  };
  
  export default departmentsReducer;
