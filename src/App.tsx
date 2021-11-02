import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './views/Home/HomePage';
import UserPage from './views/UserPage/UserPage';

const ApiUrl = process.env.REACT_APP_USERS_API

function App() {

  const [users, setUsers] = useState<User[] | []>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    console.log(process.env)
    console.log(ApiUrl)
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)

      const response = await fetch(`https://randomuser.me/api/?results=30`)
      console.log(response)

      if (response.ok) {
        const json = await response.json()
        console.log(json)
        setUsers(json.results)
        setLoading(false)
      } else {
        setLoading(false)
        setError(true)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(true)
    }
  }


  return (
    <div className="App">
      <Container className="p-md-5">
        <Row>

          <Router>
            <Route path="/" exact render={() => <HomePage users={users} error={error} />} />
            <Route path="/:userName" exact render={() => <UserPage users={users} error={error} />} />
          </Router>

        </Row>
      </Container>
    </div>
  );
}

export default App;
