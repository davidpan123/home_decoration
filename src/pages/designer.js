import styles from './designer.css';
import React, { Component } from "react";
import { Radio, Pagination  } from 'antd';
import { connect } from "dva";

/**
 * 首页
 */

@connect(
    state => ({
        starDesigners: state.designer.starDesigners,
        custom: state.designer.custom,
        designerList: state.designer.designerList
    }),
    {
        getStarDesigners: () => ({
            type: "designer/getStarDesigners"
        }),
        getHighCustom: () => ({
            type: "designer/getHighCustom"
        }),
        getDesignerList: () => ({
            type: "designer/getDesignerList"
        }),
    }
)
class Designer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            style: 'all',
            area: 'all',
            type: 'all',
            check: 1
        }
    }

    componentDidMount() {
        this.props.getStarDesigners()
        this.props.getHighCustom()
        this.props.getDesignerList()
    }

    render() {
        return (
            <div className='global_wrap'>
                <div className={styles.designer_container}>
                    <div className={styles.designer_star_pane + ' rapper_width'}>
                        <div className={styles.designer_star}>
                            <div className={styles.head}>
                                <h3>明星设计师</h3>
                                <a>如何出现在这里？</a>
                            </div>
                            <div className={styles.content}>
                                <i>

                                </i>
                                {this.props.starDesigners.map(item => (
                                    <div className={styles.star} key={item.id}>
                                        <a>
                                            <span className={styles.avatar} style={{backgroundImage: 'url(' + item.avatar + ')'}}>
                                            </span>
                                            <span className={styles.order_num} 
                                            >{item.count}</span>
                                            <h3 className={styles.name}>{item.name}</h3>
                                            <p className={styles.experience}>{item.experience}</p>
                                        </a>
                                    </div>
                                ))}
                                <div className={styles.star}>

                                </div>
                                <i>

                                </i>
                            </div>
                        </div>
                    </div>
                    <div className='rapper_width'>
                        <div className={styles.designer_header}>
                            <div className={styles.high_costum}>
                                <span className={styles.desc}>风格:</span>
                                <ul className={styles.ul_style}>
                                    {this.props.custom.styleList.map(item => (
                                        <li key={item.style}>
                                            <a className={item.style === this.state.style ? styles.style_item + styles.style_item_active  : styles.style_item}>{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.high_costum}>
                                <span className={styles.desc}>地区:</span>
                                <ul className={styles.ul_style}>
                                    {this.props.custom.areaList.map(item => (
                                        <li key={item.area}>
                                            <a className={item.area === this.state.area ? styles.style_item + styles.style_item_active  : styles.style_item}>{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.high_costum}>
                                <span className={styles.desc}>类型:</span>
                                <ul className={styles.ul_style}>
                                    {this.props.custom.typeList.map(item => (
                                        <li key={item.type}>
                                            <a className={item.type === this.state.type ? styles.style_item + styles.style_item_active  : styles.style_item}>{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.sort_pane}>
                                <div name='sort-left'>
                                    <span className={styles.default}>默认排序</span>
                                    <span className={styles.line}></span>
                                    <span className={styles.orderNum}>预约数</span>
                                </div>
                                <div name='sort-right'>
                                    <Radio.Group value={this.state.check}>
                                    <Radio value={1}>签约</Radio>
                                    <Radio value={2}>同城</Radio>
                                </Radio.Group>
                                </div>
                            </div>
                        </div>
                        <div className={styles.designer_content}>
                            <div className={styles.designer_pane}>
                                {this.props.designerList.map(item => (
                                    <div className={styles.designer} key={item.id}>
                                        <div className={styles.desiger_info}>
                                            <div className={styles.main_info}>
                                                <span className={styles.avatar} style={{backgroundImage: 'url(' + item.avatar + ')'}}></span>
                                                <h4 className={styles.userName}>{item.name}</h4>
                                                <p className={styles.deal_info}>
                                                    <span>预约人数</span>
                                                    <span className={styles.count}>
                                                        {item.count}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className={styles.more_info}>
                                                <div className={styles.badge_row}>
                                                    <span className={styles.badge_info_header}>平台认证</span>
                                                    <span className={styles.more_content}>
                                                        <span className={styles.badge_item + ' ' + styles.dl_icon}>金牌</span>
                                                        <span className={styles.badge_item}>实名认证</span>
                                                        <span className={styles.badge_item}>质保金</span>
                                                    </span>
                                                </div>
                                                <div className={styles.info_row}>
                                                    <span className={styles.row_head}>基本信息</span>
                                                    <span className={styles.more_content}>
                                                        <span>{item.address}</span>
                                                        <span className={styles.divider}></span>
                                                        <span>{item.experience}</span>
                                                    </span>
                                                </div>
                                                <div className={styles.info_row}>
                                                    <span className={styles.row_head}>擅长风格</span>
                                                    <span className={styles.more_content}>
                                                       {item.goodStyle}
                                                    </span>
                                                </div>
                                                <div className={styles.info_row}>
                                                    <span className={styles.row_head}>服务类型</span>
                                                    <span className={styles.more_content}>
                                                       {item.serviceType}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.btn_info}>
                                                <span className={styles.advice_btn}>联系TA</span>
                                            </div>
                                        </div>
                                        <div className={styles.desiger_works}>
                                            {item.workList.map((workItem, index)=> (
                                                <span className={styles.img_warp} key={index} style={{backgroundImage: 'url(' + workItem + ')'}}>
                                                    <span className={styles.bg}></span>
                                                </span>
                                            ))}
                                        </div>
                                        <div className={styles.desiger_btn}>
                                            <span>查看TA主页</span>
                                            <span className={styles.icon}></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.pagination}>
                                <Pagination defaultCurrent={1} total={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Designer