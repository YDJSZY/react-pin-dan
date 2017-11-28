/**
 * Created by luwenwei on 17/11/25.
 */
import React from 'react';
import styles from './style.scss';
export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return <div className={styles.home}>
            <div className={styles.carousel}></div>
        </div>
    }
}