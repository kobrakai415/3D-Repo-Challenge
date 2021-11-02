
interface Props {
    user: User
}

const UserDetails = ({ user }: Props) => {

    return (
        <div className="d-flex p-3 justify-content-center">
            <img src={user.picture.large} alt="use-image" />

        </div>
    )
}

export default UserDetails