import react from 'react';
import './UserThumbnail.css'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
    user: User
}

const UserThumbnail = ({ user }: Props) => {

    return (
        <Col lg={6}>
            <Link className="no-decoration" to={`/${user.login.username}`} >
                <div className="user-thumbnail text-truncate d-flex p-3 my-2">
                    <img className="rounded-circle" height={50} width={50} src={user.picture.thumbnail} alt="user-img" />
                    <div className="d-flex flex-column align-items-start px-3">
                        <h6 className="mb-0">{user.name.title + " " + user.name.first + " " + user.name.last}</h6>
                        {user.login.username}
                        <span >{user.email}</span>
                    </div>

                </div>
            </Link>
        </Col >
    )
}


export default UserThumbnail