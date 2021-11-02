import { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import UserThumbnail from "../../components/UserThumbnail/UserThumbnail";
import SearchBar from '../../components/SearchBar/SearchBar';

interface Props {
    users: User[] | [];
    error: boolean;
}

const HomePage = ({ users, error }: Props) => {

    const [query, setQuery] = useState("")
    const [filteredUsers, setFilterededUsers] = useState<User[] | []>([])
    const [userDoesNotExist, setUserDoesNotExist] = useState<boolean>(false)

    useEffect(() => {

        const userBeingSearchedFor: User[] = users.filter(user => user.login.username.includes(query))
        console.log(userBeingSearchedFor)
        userBeingSearchedFor.length > 0 ? setFilterededUsers(userBeingSearchedFor) : setUserDoesNotExist(true)


    }, [query, users])

    return (
        <>
            <Col xs={12}>
                <Row>
                    <SearchBar query={query} setQuery={setQuery} />

                    {
                        users && users.length > 0 ?
                            filteredUsers.map((user) => <UserThumbnail key={user.login.uuid} user={user} />)

                            : null
                    }
                    {
                        users.length === 0 && userDoesNotExist && query.length > 0 ?
                            <h3 className="centered">user {query} does not exist</h3>
                            : null

                    }
                    {
                        error ?
                            <h3 className="centered">Oops something went wrong with the API! PLease try again or contact support!</h3>
                            : null
                    }
                </Row>
            </Col >
        </>
    )
}


export default HomePage