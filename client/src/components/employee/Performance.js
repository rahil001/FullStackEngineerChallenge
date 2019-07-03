import React from 'react';
import { Field, reduxForm } from 'redux-form';
import fields from './perfFields';

const renderComponent = ({ label, input, type, className }) => {
  return (
      <div style={{ margin: '24px 0'}}>
          <h6>{label}</h6>
          <div>
              <label>
                  <Field {...input} className={className} component="input" type="radio" value="excellent" />
                  <span>Excellent</span>
              </label>
              <label>
                  <Field {...input} className={className} component="input" type="radio" value="very good"/>
                  <span>Very Good</span>
              </label>
              <label>
                  <Field {...input} className={className} component="input" type="radio" value="average"/>
                  <span>Average</span>
              </label>
              <label>
                  <Field {...input} className={className} component="input" type="radio" value="good"/>
                  <span>Good</span>
              </label>
          </div>
      </div>
  )
};
class FeedbackForm extends React.Component {

    render() {
        const id = this.props.empIdForPerformance;
        return (
            <div id="modal1" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4>Employee Performance</h4>
                    <form
                        onSubmit={(e) => { this.props.handlePerformanceForm(e, id) }}
                        className="col s12"
                    >
                        <div className="row">
                            <div className="col-sm-12 form-group">
                                {
                                    fields.map(({ name, label }) => {
                                        return (
                                            <Field
                                                name={name}
                                                component={renderComponent}
                                                label={label}
                                                className="with-gap"
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="teal btn-flat right white-text">
                                Submit
                                <i className="material-icons right">done</i>
                            </button>
                            <button className="red btn-flat left white-text" onClick={() => { this.props.handleFeedbackModal(false); }}>
                                Cancel
                                <i className="material-icons right">cancel</i>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};
    const defaultText = 'Please give ';
    if (!values.punctuality) {
        errors.punctuality = `${defaultText} punctuality rating`;
    }
    if (!values.performance) {
        errors.performance = `${defaultText} performance rating`;
    }
    if (!values.achievement) {
        errors.achievement = `${defaultText} achievement rating`;
    }
    if (!values.engagement) {
        errors.engagement = `${defaultText} engagement rating`;
    }
    if (!values.rating) {
        errors.rating = `${defaultText} Overall Rating`;
    }

    return errors;
};

export default reduxForm({
    form: 'feedbackForm',
    validate
})(FeedbackForm);

