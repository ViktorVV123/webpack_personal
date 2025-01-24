import React, {useState} from 'react';
import * as styles from './App.module.scss'
import {Link} from "react-router-dom";
import Shop from "@/pages/shop/Shop";
import About from "@/pages/about/About";
import SvgTest from "@/assets/delete.svg"


export const App = () => {

    if (__PLATFORM__ === 'dekstop') {
        return <div>ISDESKTOPPLATFORM</div>
    }
    if (__PLATFORM__ === 'mobile') {
        return <div>ISMOBILEPLATFORM</div>
    }
    //сюда можно заносить исключения какие то на сборку
    if (__ENV__ === 'development') {
        //setEVTOOls
    }
    const [count, setCount] = useState<number>(0);
    return (
        <div className={styles.buttonOne}>
           {/* <h1>PLATFORM={__PLATFORM__}</h1>*/}
            <Link to={`/about`}>about</Link>
            <Link to={`/shop`}>shop</Link>
            <button className={styles.test} onClick={() => setCount(count + 1)}>+</button>
            {count}
            <button onClick={() => setCount(count - 1)}>-</button>
            <SvgTest  fill={'white'} width={100} height={100} />
            <Shop/>
            <About/>
        </div>
    );
};

