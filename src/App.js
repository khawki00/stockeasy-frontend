import "./App.css";
import Landing from "./components/Landing";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from "./screens/Dashboard";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path="/dashboard" exact 
        element={<Layout>
              <Dashboard/>
          </Layout>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
