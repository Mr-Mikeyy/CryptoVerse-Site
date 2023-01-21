import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreensize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreensize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoVerse</Link>
                </Typography.Title> 
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button> 
            </div>
            {activeMenu && (
                <Menu theme="dark" items={[
                    { key: 'home', label: <Link to='/'>Home</Link>, icon: <HomeOutlined /> },
                    { key: 'cryptocurrencies', label: <Link to='/cryptocurrencies'>Cryptocurrencies</Link>, icon: <FundOutlined /> },
                    { key: 'news', label: <Link to='/news'>News</Link>, icon: <BulbOutlined /> }
                    ]} />
            )}
        </div>
    );
}

export default Navbar;