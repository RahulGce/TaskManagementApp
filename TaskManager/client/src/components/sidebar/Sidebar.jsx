import './Sidebar.scss';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';



const Sidebar=()=>{
    const currentUser = useSelector((state) => state.auth.currentUser);
    return(
        <div>
            <ul className="sidebar">
                <h5 className="list-item">{currentUser ? currentUser.username : 'Guest'}</h5>
                
                <li className='list-item'>
                    <Link to='/dashboard'>Dashboard
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;