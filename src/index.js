import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./Components";
import {Form, Home} from "./Pages/index";
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="form" element={<Form/>}/>
        </Routes>
    </BrowserRouter>
    </React.StrictMode>
);
