import React from 'react';
import Navbar from './components/Navber';
import Main from './components/Main';
import './style.css'

function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}

export default App;