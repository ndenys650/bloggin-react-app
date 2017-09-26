import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// reduxForm knows 


class PostsNew extends Component {
	// field object contains event handlers we need to wire up to jsx we need to return
	// removing specific render field to make input tag dynamic
	renderField(field) {
		return (
			<div className="form-group">
			{/* field.label taken from form makes the title specific */}
			<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					//  ... says take the object with all its properties 
					// to be communicated as props to the input tag 
					{...field.input}
				/>
			</div>
		);
	}

	render() {
		return (
			<form>
				<Field
					label="Title"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Tags"
					name="tags"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="post content"
					component={this.renderField}
				/>
			</form>
		);
	}
}

// use redux form to wrap the PostsNew Component
// allowing for clear communication between reducer and this component
// give form property to specify a specific state this component will use
export default reduxForm({
	// 'form' sets unique string to name this form
	form: 'PostsNewForm'
})(PostsNew);