import { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import UserThumbnail from "../../components/UserThumbnail/UserThumbnail";
import SearchBar from '../../components/SearchBar/SearchBar';

interface Props {
    users: User[] | [];
    error: boolean;
}

const HomePage = ({ users, error }: Props) => {

    return (
        <>
            <Col xs={12}>
                <Row>
                    <SearchBar />
                    {
                        users && users.length > 0 ?
                            users.map((user) => <UserThumbnail key={user.login.uuid} user={user} />)
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