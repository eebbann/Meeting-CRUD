import React from 'react'
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css'

function MeetupList(props) {
	return (
		<div className= {classes.list}>
			 {props.meetups.map((item)=>(
           <MeetupItem 
					 key={item.id}
					 id={item.id}
					image={item.image}
					title={item.title}
					address={item.address}
					description={item.description}/>
			 ))}
		</div>
	)
}

export default MeetupList
