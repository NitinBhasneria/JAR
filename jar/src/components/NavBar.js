import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <h2>Job Application Review System</h2>
            <div className='linkContainer'>
                <Link to="/add"><p className="btnAdd">Add Candidate</p></Link>
                <Link to="/"><p className="btnAdd">Home</p></Link>
            </div>
        </div>
    )
}

export default NavBar