import React from 'react';
import './homepage.styles.scss';


const HomePage = () => (
    <div className='homepage'>
        <h1>SFF PC SHOP</h1>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>Dan A4</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>Ncase</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>MJOLNIR</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>FormD T1</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>Ghost S1</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

        </div>

    </div>
);

export default HomePage;