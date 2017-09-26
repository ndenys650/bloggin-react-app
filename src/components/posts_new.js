import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

// reduxForm handles the state and validation of our form

class PostsNew extends Component {
	// field object contains event handlers we need to wire up to jsx we need to return
	// removing specific render field to make input tag dynamic
	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;
		return (
			<div className={className}>
			{/* field.label taken from form makes the title specific */}
			<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					//  ... says take the object with all its properties 
					// to be communicated as props to the input tag 
					{...field.input}
				/>

				{/* meta.error auto added to field object from validate function below */}
				{/* touched mean user has clocked on input entered something and moved away */}
				<div className="text-help">
					{ touched ? error : '' }
				</div>
			</div>
		);
	}

	onSubmit(values) {
		// this === component
		console.log(values);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			// 
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				{/* handle submission of form */}
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

// validate takes inputs and confirms completion
function validate(values) {
	const errors = {};

	// validate the inputs from 'values'
	// these if statements can be multiplied to customize the responses
	if (!values.title || values.title.length < 3) {
		errors.title = "Enter a title that is at least 3 characters!";
	}

	if (!values.categories) {
		errors.categories = "Enter a category!";
	}

	if (!values.content) {
		errors.content = "Enter some content please";
	}

	// if errors is empty, the form is fine to submit
	// if errors has any properties, redux form assumes form is invalid
	return errors;
}

// use redux form to wrap the PostsNew Component
// allowing for clear communication between reducer and this component
// give form property to specify a specific state this component will use
export default reduxForm({
	validate,
	// 'form' sets unique string to name this form
	form: 'PostsNewForm'
})(PostsNew);