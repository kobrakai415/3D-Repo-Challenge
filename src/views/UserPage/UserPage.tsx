import { useEffect, useState } from "react";
import { Col, Button } from 'react-bootstrap';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import UserDetails from "../../components/UserDetails/UserDetails";
import { IoMdArrowRoundBack } from 'react-icons/io';

interface Props {
    users: User[] | [];
    error: boolean;
}

const UserPage = ({ users }: Props) => {

    const { userName } = useParams<{ userName: string }>()

    const [user, setUser] = useState<User | null>(null)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {

        const user = users.find((user) => user.login.username === userName)
        console.log(user)
        user ? setUser(user) : setError(true)

    }, [users, userName])

    return (
        <>
            <Col xs={12}>
                <div>
                    <Link to="/">
                        <Button >
                            <IoMdArrowRoundBack className="me-2" style={{ fontSize: "30px" }} />

                        </Button>
                    </Link>
                    {user ?
                        <UserDetails user={user} />
                        : null}

                    {error ?
                        <h3 className="centered">Oops an error occured, {userName} is not a valid user!</h3>
                        : null}
                </div>
            </Col >
        </>
    )
}

export default UserPage
