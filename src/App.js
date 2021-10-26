 import { Route, Switch } from "react-router-dom/";
 import AllMeetups from "./pages/AllMeetups";
 import NewMeetup from "./pages/NewMeetup";
 import Favourites from "./pages/Favourites";
import Navigator from "./components/layout/Navigator";


 function App() {
  return   <div>
	 <Navigator />
		<Switch>
   <Route path='/' exact> 
	 <AllMeetups />
	 </Route>
	 <Route path='/new-meetup'> 
	 <NewMeetup/>
	 </Route>
	 <Route path='/favourites'> 
	 <Favourites />
	 </Route>
	 </Switch>
	</div>
}

export default App;
