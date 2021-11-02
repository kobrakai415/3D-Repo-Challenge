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
        setFilterededUsers(userBeingSearchedFor)
        if (userBeingSearchedFor.length === 0) setUserDoesNotExist(true)


    }, [query, users])

    return (
        <>
            <Col xs={12}>
                <Row>
                    <SearchBar query={query} setQuery={setQuery} />

                    {
                        filteredUsers.length > 0 ?
                            filteredUsers.map((user) => <UserThumbnail key={user.login.uuid} user={user} />)

                            : null
                    }
                    {
                        filteredUsers.length === 0 && userDoesNotExist ?
                            <h3 className="centered d-flex justify-content-center">User "{query}" does not exist</h3>
                            : null

                    }
                    {
                        error ?
                            <h3 className="centered d-flex justify-content-center">Oops something went wrong with the API! PLease try again or contact support!</h3>
                            : null
                    }
                </Row>
            </Col >
        </>
    )
}


export default HomePage