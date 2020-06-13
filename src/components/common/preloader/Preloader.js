import React from 'react';
import pr from './preloader.module.css';
import preloader from '../../../assets/img/preloader.svg'

function Preloader(props) {
    return (
        <div>
            {props.isFetching ? <img className={pr.loader} src={preloader} /> : null}
        </div>
    )
}

export default Preloader