import { Card } from "react-bootstrap"

interface Props {
    user: User
}

const UserDetails = ({ user }: Props) => {

    return (
        <div className="d-flex p-3 justify-content-center">
            <Card style={{ minWidth: "300px" }}>
                <img src={user.picture.large} alt="user-image" />
                <Card.Body>
                    <div className="d-flex py-1">
                        <span className="pe-2">Full name: </span>
                        <span>{user.name.title + user.name.first + user.name.last}</span>
                    </div>
                    <div className="d-flex py-1">
                        <span className="pe-2">Username: </span>
                        <span>{user.login.username}</span>
                    </div>
                    <div className="d-flex py-1">
                        <span className="pe-2">Email: </span>
                        <a href={`mailto:${user.email}`} target="_blank" rel="noreferrer" >
                            {user.email}
                        </a>
                    </div>
                    <div className="d-flex py-1">
                        <span className="pe-2">Age: </span>
                        <span>{user.dob.age}</span>
                    </div>
                    <div className="d-flex py-1">
                        <span className="pe-2">Country: </span>
                        <span>{user.location.country}</span>
                    </div>

                </Card.Body>
            </Card>

        </div>
    )
}

export default UserDetails