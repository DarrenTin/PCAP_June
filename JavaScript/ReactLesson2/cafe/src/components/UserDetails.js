import { Link } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import CurrentUserContext from '../context/CurrentUserContext';
import Profile from '../images/profile.jpg';
import './UserDetails.css';

function UserDetails() {
    const { currentUser, setCurrentUser }= useContext(CurrentUserContext);
    const logout = async () => {
        try {
            await axios.post('/api/auth/logout', {});
            setCurrentUser({});
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    };
    return (
        <div className='user-details-component'>
            {
                currentUser.username ? (
                    <div>
                        {currentUser.access === 'associate' ? <Link to="/orders">Orders</Link> : null}
                        <img src={Profile} alt="profile" />
                        <p>{currentUser.username}</p>
                        <button type='button' onClick={logout}>Log Out</button>
                    </div>
                ) : <Link to="/login">Log In</Link>
            }
        </div>
    );
}

export default UserDetails;