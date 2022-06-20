import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';
import styles from './index.module.sass';

const Navbar = () => {
  
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={icon} alt="" className={styles.logoimg}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Currensies</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Converting</a>
                    </li>
                   
                  </ul>
                </div>
            </div>
        </nav>
  );
};

export default Navbar;