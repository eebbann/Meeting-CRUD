import React, {useRef}  from 'react';
import Card from '../ui/Card';
import classes from './NewMeetup.module.css'


function NewMeetupForm(props ) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

function submitHandler(event){
    event.preventDefault();

		const enteredTitle = titleInputRef.current.value
		const enteredImage = imageInputRef.current.value;
		const  enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;


		const meetupData = {
         title : enteredTitle,
				 image : enteredImage,
				 address:enteredAddress,
				 description: enteredDescription

		}

		props.onAddMeetup(meetupData);
}


	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
				  <label htmlFor="title">Meetup title</label>
					<input type='text' required id="title" ref={titleInputRef}/>
				</div>
				<div className={classes.control}>
				  <label htmlFor="image">Meetup Image</label>
					<input type='url' required id="image" ref={imageInputRef}/>
				</div>
				<div className={classes.control}>
				  <label htmlFor="address">Meetup Address</label>
					<input type='text' required id="address"  ref={addressInputRef}/>
				</div>
				<div className={classes.control}>
				  <label htmlFor="description">Meetup Description</label>
					<input type='text' id= 'description'required row='5' ref={descriptionInputRef} />
				</div>
				<div className={classes.actions}>
				   <button>Add Meetup</button>
				</div>
			</form>

		</Card>
	)
}

export default NewMeetupForm
