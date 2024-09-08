import React from 'react';
import { HomeSelected } from '../../HomeSelect';
import { BannerHome } from '../../HomeBanner';
import s from './HomeHero.module.css'

const HomeHero = ({mainData}) => {
    
    return (
        <div className={s.hero}>
           <HomeSelected/> 
           <BannerHome mainData={mainData}/>
        </div>
    );
};

export default HomeHero;