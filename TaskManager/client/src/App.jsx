import './App.css'
import Header from './components/header/Header'
import Signup from './components/registration/Signup';
import './styles/main.scss';
import Signin from './components/registration/Signin';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import TaskManager from './pages/taskmanagement/TaskManager';
import Dashboard from './pages/dashboard/dashboard';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/taskmanager' element={<TaskManager/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
