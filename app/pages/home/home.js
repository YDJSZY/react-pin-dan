/**
 * Created by luwenwei on 17/11/25.
 */
import React from 'react';
import ThumbnailComponent from '../../components/thumbnail/thumbnail';
import styles from './style.scss';
export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        let data = {
            img_url:'../../images/order1.png',
            style:{marginTop:'8px'},
            price:'满199减100/满399减200',
            order_address:'京东 | 15:30',
            status:1,
            people_count:2,
            order_description:'这是恨便宜的拼单,欢迎来购买.本店特价不要998只要89,真的只要这个价'
        }
        return <div className={styles.home}>
            <div className={styles.carousel}></div>
            <ThumbnailComponent data={data}>
                
            </ThumbnailComponent>
        </div>
    }
}