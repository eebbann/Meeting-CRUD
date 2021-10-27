import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
 
 
function AllMeetups() {
	 	fetch ('').then(response => { return response.json()})
	
	
	return (
	<section>

			<h1 className='header'> Meet ups	</h1>
			   
			<MeetupList meetups={DUMMY_DATA}/>
				  
		</section>
	)
}

export default AllMeetups
