import './App.css'
import CandidateList from './components/CandidateList'
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import PostForm from './components/PostForm';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
            <Route exact path='/' element={< CandidateList />}></Route>
            <Route exact path='/add' element={<PostForm />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
