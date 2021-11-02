import './Navbar.css'

const Navbar = () => {

    return (
        <div className="d-flex py-3  mb-3 px-3 px-md-5 my-navbar justify-content-between">
            <img src="https://upload.wikimedia.org/wikipedia/en/7/76/Logo_of_3D_Repo.png" height={40} alt="3d-repo-logo" />
            <img src="/user.png" height={40} alt="user-account" />
        </div>
    )
}

export default Navbar