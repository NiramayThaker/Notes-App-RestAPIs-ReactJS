import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from 'react-router-dom';


import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/note/:id" exact element={<NotePage />} />
          <Route path="/" exact element={<NotesListPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;