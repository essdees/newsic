import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

function App() {
  return (
   <div>
      <Router>
        <Navbar/>

        <Routes >
          <Route path='/' element={<News pageSize={6} country="in" category="general" key='general'/>}></Route>
          <Route path='business' element={<News pageSize={6} country="in" category="business" key='business'/>}></Route>
          <Route path='entertainment' element={<News pageSize={6} country="in" category="entertainment" key='entertainment'/>}></Route>
          <Route path='health' element={<News pageSize={6} country="in" category="health" key='health'/>}></Route>
          <Route path='science' element={<News pageSize={6} country="in" category="science" key='science'/>}></Route>
          <Route path='sports' element={<News pageSize={6} country="in" category="sports" key='sports'/>}></Route>
          <Route path='technology' element={<News pageSize={6} country="in" category="technology" key='technology'/>}></Route>
        </Routes>
     </Router>
   </div>
  );
}

export default App;
