import React from 'react';
import { Field, reduxForm } from 'redux-form';
import EmployeeField from '../components/employee/EmployeeField';
import formFields from '../components/employee/empFormFields';

class AddEmployeeForm extends React.Component {

    componentDidMount () {
        if(this.props.isEdit) {
            this.handleInitialize();
        }
    }

    handleInitialize() {
        const employee = this.props.employee || {};
        const initData = {
            "name": employee.name,
            "id": employee.id,
            "password": employee.password,
            "designation": employee.designation,
            "department": employee.department
        };

        this.props.initialize(initData);
    }
    renderFields () {
        return (
            <div>
                {
                    formFields.map(({label, name}) => {
                        return (
                            <Field
                                    name={name}
                                    type="text"
                                    component={EmployeeField}
                                    label={label}
                                    key={name}
                            />
                        )
                    })

                }
            </div>
        )
    }
    render() {
        const employee = this.props.employee || {};
        return (
            <form onSubmit={(e) => { this.props.submitEmployeeForm(e, this.props.isEdit, employee.id) }} className="col s12">
                {this.renderFields()}
                <button type="submit" className="teal btn-flat right white-text">
                Submit
                <i className="material-icons right">done</i>
                </button>
                <button className="red btn-flat white-text" onClick={this.props.closeEmployeeForm}>
                    Cancel
                    <i className="material-icons right">cancel</i>
                </button>
            </form>
        );
    }
}

function validate (values) {
    const errors = {};
    const defaultText = 'You must provide';
    if (!values.name) {
        errors.name = `${defaultText} name`;
      }
      if (!values.password) {
        errors.password = `${defaultText} password`;
      }
      if (!values.id) {
        errors.id = `${defaultText} employee id`;
      }

      return errors;
}

export default reduxForm({
    form: 'employeeForm',
    validate
})(AddEmployeeForm);

