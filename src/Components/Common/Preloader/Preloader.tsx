import React from 'react';
import classes from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={classes.preloader_wrapper}>
            <div className={classes.preloader}/>
        </div>
    );
};

export default Preloader;