import react from 'react';
import './UserThumbnail.css'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
    user: User
}

const UserThumbnail = ({ user }: Props) => {

    return (
        <Col xs={6}>
            <div className="user-thumbnail d-flex py-3">
                <img className="rounded-circle" height={50} width={50} src={user.picture.thumbnail} alt="user-img" />
                <div className="d-flex flex-column align-items-start px-3">
                    <h6 className="mb-0">{user.name.title + user.name.first + user.name.last}</h6>
                    <Link to={`/${user.login.username}`} >
                        {user.login.username}
                    </Link>
                    <span className="text-muted">{user.email}</span>
                </div>

            </div>
        </Col >
    )
}


export default UserThumbnail