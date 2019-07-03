import React from 'react';
import formFields from './employee/empFormFields';

const renderEmployees = (props) => {
    const employeesList = props.employeesList;
    return (
        <div className="row">
        {
            employeesList.length > 0 && (
                employeesList.map((employee, index) => {
                    return (
                        <div className="col s12 m4" key={index}>
                            <div className="card indigo">
                                <div className="card-content white-text">
                                    {
                                        formFields.map(({ name }, index) => {
                                            return (
                                                <div key={index}>
                                                    <label className="card-title">{name.toUpperCase()}</label>
                                                    <span className="card-title">{employee[name]}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="card-action">
                                    <button onClick={() => {props.editEmployee(employee)}} className="btn-cstm teal">
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button onClick={() => {props.deleteEmployee(employee.id)}} className="btn-cstm red lighten-2">
                                        <i className="material-icons">delete</i>
                                    </button>
                                </div>
                                <button className="top-corner white-text blue-grey darken-1"
                                        onClick={() => { props.handleFeedbackModal(true, employee.id); }}
                                >
                                    <i className="material-icons">zoom_in</i><span style={{ position: 'relative', top: '-6px'}}>View Details</span>
                                </button>
                            </div>
                        </div>
                    )
                })
            )
        }
        </div>
    )
}
const Admin = (props) => {
    return (
        <div>
            <div className="row">
                <div className="s12 m8 addEmpTitle">
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Add Employee</span>
                        <button onClick={props.handleAddEmployee} className="btn-floating halfway-fab waves-effect waves-light red">
                            <i className="material-icons">add</i>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            {renderEmployees(props)}
        </div>
    )
};
export default Admin;
