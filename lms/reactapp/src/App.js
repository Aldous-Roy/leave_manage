
import './App.css';
import CharitySub from'./pages/users/Charity_Sub'
import DirectDonation from'./pages/users/DirectDon'
import Merch from'./pages/users/Merchandise'
import NewsFeed from'./pages/users/NewsFeed'
import Tasks from'./pages/users/Tasks'
import Profile from'./pages/users/Profile'
import About from'./pages/users/About'

import DashBoard from './pages/charity/Dashboard'
import Donations from './pages/charity/Donation'
import Reports from './pages/charity/Report'


import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route path="/newsfeed" exact component={NewsFeed} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/Merch" component={Merch} />
          <Route path="/donations" component={DirectDonation} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/Subscriptions" component={CharitySub} />

          <Route path="/dashboard" component={DashBoard} />
          <Route path="/donations" component={Donations} />
          <Route path="/reports" component={Reports} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
