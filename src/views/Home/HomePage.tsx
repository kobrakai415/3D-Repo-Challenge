import { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';

interface Props {
    users: User[] | null;
    error: boolean;
}

const HomePage = ({ users }: Props) => {

    return (
        <>
            <Col xs={12}>
                <Row>
                    
                </Row>
            </Col >
        </>
    )
}


export default HomePage