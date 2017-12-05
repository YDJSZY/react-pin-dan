/**
 * Created by luwenwei on 17/12/4.
 */
import React from "react";
import styles from './style.scss';

export default class ThumbnailComponent extends React.Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {};
        this.data = props.data;
    }
    
    render() {
        let data = this.data;
        return data ? <div className={styles.thumbnail} style={this.props.style}>
            <div className={styles.thumbnail_img}>
                <img src={this.data.img_url} />
            </div>
            <div className={styles.thumbnail_description}>
                <div className={styles.thumbnail_order_description}>
                    {data.order_description}
                </div>
                <div className={styles.price}>
                    {data.price}
                </div>
                <div className={styles.people_count}>
                    建议拼单人数: {data.people_count+'人'}
                </div>
                <div className={styles.bottom}>
                    <span className={styles.order_address}>
                        {this.data.order_address}
                    </span>
                    <span className={styles.btn}>
                        <button className={styles.create_order}>创建拼单</button>
                    </span>
                </div>
            </div>
        </div> : null
    }
}