import React from 'react';
import {About,Footer,Header,Registration,Summit} from '../../Containers/index'
import './home.css';
import {Link,Outlet} from 'react-router-dom'
import {Navbar} from '../../Components/index'
function Home() {
    return (
        <div>
            <div className="building--bg">
                <Header/>
            </div>
            <div className="dark--bg">
                <Registration/>
                <Summit/>
            </div>
            <div className="light--bg">
                <About/>
            </div>
            <div className="design--bg">
                <Footer/>
            </div>
        </div>
    );
}

export default Home;