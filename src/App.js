import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Cryptocurrencies, News } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <Router>
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" element={ <Homepage/> } />
                            <Route exact path="/cryptocurrencies" element={ <Cryptocurrencies/> } />
                            <Route exact path="/news" element={ <News/> } />
                        </Routes>
                    </div>
                </Layout>
            <div className="footer">
                <Typography.Title level={5} style={{ color: 'white', textalign: 'center' }}>
                    <div className="paddingRight">
                        CryptoVerse <br />
                    </div>
                    <div>
                        All rights reserved
                    </div>
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/news">News</Link>
                </Space>
                </div>
            </div>
        </div>
        </Router>
    );
}

export default App;

