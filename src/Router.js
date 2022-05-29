import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.js'
import Profile from './Profile.js'
import Video from './Video.js'

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/>} />
                <Route path="/profile" element={ <Profile/> } />
                <Route path="/Video" element={ <Video/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;