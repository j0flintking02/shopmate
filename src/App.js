import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import DepartmentView from './componets/departments'

function App() {
  console.log(this)
  return (    
    <Provider store={store}>
    <p>hey there</p>
    <DepartmentView/>
  </Provider>
  );
}

export default App;
