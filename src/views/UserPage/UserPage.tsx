import { useEffect, useState } from "react";

interface Props {
    users: User[] | null;
    error: boolean;
}

const UserPage = ({ users }: Props) => {

    return (
        <>
            <div>
                UserPage
            </div>
        </>
    )
}

export default UserPage
