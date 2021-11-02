import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './views/Home/HomePage';
import UserPage from './views/UserPage/UserPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/:userName" exact render={() => <UserPage />} />
      </Router>
    </div>
  );
}

export default App;
