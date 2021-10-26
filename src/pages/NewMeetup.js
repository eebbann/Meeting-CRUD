import React from 'react'
import {useHistory} from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
	const history = useHistory();
	const addMeetupHandler = (meetupData) =>{
   fetch('https://react-meeting-42670-default-rtdb.firebaseio.com/meetups.json',
			{
				method:'POST',
				body: JSON.stringify(meetupData),
				headers:{
					'content-type':'application/json'
				}
			}
	 ).then(()=>{
		history.replace('/');
	 })
	}
	return (
		<section>
	<h1 className='header'> Add New Meetup </h1>
	 <NewMeetupForm onAddMeetup={addMeetupHandler}/>
		</section>
	)
}

export default NewMeetup
