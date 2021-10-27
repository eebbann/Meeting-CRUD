import React,{useState, useEffect} from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetups() {
	const [isLoading, setIsLoading] = useState(true)
	const [loadedMeetups, setLoadedMeetups] = useState([])
	
	useEffect(() => {
		setIsLoading(true)
		fetch('https://react-meeting-42670-default-rtdb.firebaseio.com/meetups.json')
	.then(response => { return response.json()}).then(data=>{
		const meetups = []
		for (const key in data) {
			const meetup = {
				id: key,
				...data[key]
			};
      meetups.push(meetup);
		}
		setIsLoading(false)
		setLoadedMeetups(meetups)
	});
	}, [setIsLoading, setLoadedMeetups])


 if (isLoading){
	 return (
	 <div>
		  <p className='load'> Loading.. </p>
	 </div>)
 }
	return (
	<section>

			<h1 className='header'> Meet ups	</h1>
			   
			<MeetupList meetups={loadedMeetups}/>
				  
		</section>
	)
}

export default AllMeetups
