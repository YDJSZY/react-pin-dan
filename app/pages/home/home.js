/**
 * Created by luwenwei on 17/11/25.
 */
import React from 'react';
import ThumbnailComponent from '../../components/thumbnail/thumbnail';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import styles from './style.scss';
export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            carouselData: ['', '', ''],
            orderData:[],
            imgHeight: 120,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                carouselData: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
                orderData:[
                    {
                        img_url:'../../images/order1.png',
                        price:'满199减100/满399减200',
                        order_address:'京东 | 15:30',
                        status:1,
                        people_count:2,
                        order_description:'这是恨便宜的拼单,欢迎来购买.本店特价不要998只要89,真的只要这个价'
                    },
                    {
                        img_url:'../../images/order1.png',
                        price:'满299减100/满399减200',
                        order_address:'淘宝 | 15:30',
                        status:1,
                        people_count:23,
                        order_description:'这是恨便宜的拼单,欢迎来购买.本店特价不要998只要89,真的只要这个价'
                    }
                ]
            });
        }, 500);
    }

    render() {
        return <div className={styles.home}>
            <div className={styles.carousel}>
                <Carousel
                    autoplay={true}
                    infinite
                    selectedIndex={1}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    style={{height: '100%'}}
                >
                    {this.state.carouselData.map(ii => (
                        <a
                            key={ii}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: '100%' }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top',height:'100%' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    //this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </div>
            {
                this.state.orderData.map((data,index)=>{
                   return <ThumbnailComponent key={'_'+index} data={data}>

                    </ThumbnailComponent>
                })
            }
        </div>
    }
}