import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// reduxForm knows 


class PostsNew extends Component {
	// field object contains event handlers we need to wire up to jsx we need to return
	renderTitleField(field) {
		return (
			<div>
				<input
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
					name="title"
					component={this.renderTitleField}
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