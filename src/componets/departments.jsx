import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDepartments } from '../actions/departmentsAction'


class DepartmentView extends Component {
   componentDidMount() {
       this.props.fetchDepartments()
   }
   
  
  
    render() {
        let content   
        const { departments } = this.props
        const data = departments.departments
        if (data.length === 0) {
            content = 'NO CONTENT TO DISPLAY';
          }
        content = data.map(department => (
            <div key={department.department_id}>
              <ul>
                  <li>
                    <h2>{department.name}</h2>
                    <p>
                        {department.description}
                    </p>
                  </li>
              </ul>
            </div>
          ));
      return (
          <div>
              {content}
          </div>
      );
    }
  }
  DepartmentView.propTypes = {
    fetchDepartments: PropTypes.func.isRequired,
  };
  const mapStateToProps = state => ({
    departments: state.department,
  });
  
  export default connect(mapStateToProps, { fetchDepartments })(DepartmentView);