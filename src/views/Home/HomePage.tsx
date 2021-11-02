import { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import UserThumbnail from "../../components/UserThumbnail/UserThumbnail";

interface Props {
    users: User[] | null;
    error: boolean;
}

const HomePage = ({ users }: Props) => {

    return (
        <>
            <Col xs={12}>
                <Row>
                    {
                        users && users.length > 0 ?
                            users.map((user) => <UserThumbnail key={user.login.uuid} user={user} />)
                            : null
                    }
                </Row>
            </Col >
        </>
    )
}


export default HomePage