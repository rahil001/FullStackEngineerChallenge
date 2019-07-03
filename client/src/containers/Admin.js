
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {store} from '../index';
import Admin from '../components/Admin';
import EmployeeForm from './EmployeeForm';
import Performance from '../components/employee/Performance';

import { employeeFormAction, getAllEmployees,
    removeEmployee, updateEmployee, addPerfomanceReview
} from '../actions';


class AdminContainer extends Component {
    state = {
        showAddEmployeeForm: false,
        employeesDefVal: null,
        isEdit: false,
        showPerformanceModal: false,
        empIdForPerformance: null
    };

    handleAddEmployee = () => {
        this.setState({
            showAddEmployeeForm: true,
            isEdit: false
        })
    };

    handleFeedbackModal = (val, empId) => {
        this.setState({
            showPerformanceModal: val
        });
        if (val) {
            this.setState({
                empIdForPerformance: empId
            })
        }
    };

    editEmployee = (employees) => {
        this.setState({
            showAddEmployeeForm: true,
            employeesDefVal: {...employees},
            isEdit: true
        })
    };

    componentDidMount () {
        this.props.getEmployees();
    }

    closeEmployeeForm = (e) => {
        e.stopPropagation();
        this.setState({
            showAddEmployeeForm: false
        })
    };

    render() {
        const showAddEmployeeForm = this.state.showAddEmployeeForm;
        const showPerformanceModal = this.state.showPerformanceModal;
        return (
            <div>
                {!showAddEmployeeForm && <Admin
                    {...this.props}
                    handleAddEmployee={this.handleAddEmployee}
                    editEmployee={this.editEmployee}
                    handleFeedbackModal={this.handleFeedbackModal}
                />}
                {showAddEmployeeForm && (
                <EmployeeForm
                    submitEmployeeForm={this.props.employeeFormHandler}
                    closeEmployeeForm={this.closeEmployeeForm}
                    employee={this.state.employeesDefVal}
                    isEdit={this.state.isEdit}
                />
                )}
                {
                    showPerformanceModal && <Performance
                        handleFeedbackModal={this.handleFeedbackModal}
                        empIdForPerformance={this.state.empIdForPerformance}
                        handlePerformanceForm={this.props.handlePerformanceForm}
                    />
                }
            </div>
        )
    }
}

const mapDispatchToprops = (dispatch) => {

    const employeeFormHandler = (e, isEdit, empId) => {
        e.preventDefault();
        let state = store.getState();
        const employeeDeatils = state.form.employeeForm && state.form.employeeForm.values;
        if (isEdit) {
            return dispatch(updateEmployee(empId, employeeDeatils));
        }
        dispatch(employeeFormAction(employeeDeatils));

    };

    const handlePerformanceForm = (e, id) => {
        e.preventDefault();
        let state = store.getState();
        const employeeDetails = state.form.feedbackForm && state.form.feedbackForm.values;
        dispatch(addPerfomanceReview(id, employeeDetails));
    };

    const getEmployees = () => {
        dispatch(getAllEmployees());
    };

    const deleteEmployee = (empID) => {
        dispatch(removeEmployee(empID));
    };

    return {
        employeeFormHandler,
        getEmployees,
        deleteEmployee,
        handlePerformanceForm
    }
};
function mapStateToProps(state) {
    const employeesList = state.admin.employees || [];
    return {
        employeesList
    };
}

export default connect(mapStateToProps, mapDispatchToprops)(AdminContainer);
