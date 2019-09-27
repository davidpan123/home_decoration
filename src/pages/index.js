import styles from './index.css';
import React, { Component } from "react";
import { Carousel } from 'antd';
import { connect } from "dva";

/**
 * 首页
 */

@connect(
    state => ({
        sliderList: state.home.sliderList,
        processList: state.home.processList,
        componyList: state.home.componyList
    }),
    {
        getSliderList: () => ({
            type: "home/getSliderList"
        }),
        getComponyList: () => ({
            type: "home/getComponyList"
        })
    }
)
class Home extends Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.getSliderList()
        this.props.getComponyList()
    }

    render() {
        return (
            <div className='global_wrap'>
                <div id="#home_container">
                    {/* 跑马灯 */}
                    <div id="#slider_pane">
                        <Carousel autoplay>
                            {this.props.sliderList.map(item => (
                                <div key={item.id} className={styles.carousel}>
                                    <img src={item.url} alt=""></img>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    {/* 装修进程 */}
                    <div className={styles.process_pane}>
                        <ul className={styles.process_pane_ul}>
                            {this.props.processList.map(item => (
                                <li key={item.id} className={styles.process_item}>
                                    <div className={styles.process_item_pane}>
                                        <div className={styles.process_item_left}>
                                            <div>{item.title}</div>
                                            <span>{item.desc}</span>
                                        </div>
                                        <div className={styles.process_item_right}>
                                            <img src={item.url} alt=""></img>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* 装修公司 */}
                    <div className={styles.content_pane}>
                        <div className={styles.content_warpper +' rapper_width'}
                        >
                            {/* title */}
                            <div className={styles.content_index_header}>
                                <h2 className={styles.title}>
                                    <span className={styles.line}></span>
                                    <span>深圳装修公司</span>
                                    <span className={styles.line}></span>
                                </h2>
                            </div>
                            {/* company list */}
                            <div className={styles.content_index_company}>
                                {this.props.componyList.map(item => (
                                    /* eslint-disable */
                                    <a className={styles.company_list} key={item.id}>
                                        <div className={styles.company}>
                                            <div className={styles.company_bac_url}>
                                                <img src={item.url} className={styles.bac_img} alt=""></img>
                                            </div>
                                            <div className={styles.zzx_company_logo_box}>
                                                <img src={item.url} className={styles.zzx_company_logo} alt=""></img>
                                            </div>
                                        </div>
                                        <div className={styles.detail}>
                                            <p>{item.title}</p>
                                            <div className={styles.case_pane}>
                                                <span className={styles.lable}
                                                >
                                                    设计案例:
                                                </span>
                                                <span className={styles.conter}>
                                                    {item.caseNum}
                                                </span>
                                                <span className={styles.lable + ' ' + styles.build_lable}>装修工地:</span>
                                                <span className={styles.conter}>{item.buildingSiteNum}</span>
                                            </div>
                                            <span className={styles.tel_pane}>
                                                <span className={styles.telphone}>
                                                    {item.phoneNumber}
                                                </span>
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home