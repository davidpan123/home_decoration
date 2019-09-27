
import React, { Component } from "react";
import styles from './case.css';
import Masonry from 'react-masonry-component';
const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
let waterfallDom = null
class Case extends Component {
  constructor(props) {
      super(props)
      this.myRef = React.createRef()
      this.state = {
          isShow: false,
          caseList: [],
          randomList: [
            'https://qhrenderpicoss.kujiale.com/r/2019/03/09/L3D121S8ENDIGOMHKAUI5MJEXPT3P3X4888_1600x1200.jpg?x-oss-process=image/resize,m_fill,w_340,h_285/format,webp',
            'https://qhrenderpicoss.kujiale.com/r/2019/04/29/L3D187S8ENDIHMYT2YUI5NYALUF3P3W4888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_340,h_325/format,webp',
            'https://qhrenderpicoss.kujiale.com/r/2019/05/26/L3D123S8ENDIH277RAUI5L7ELUF3P3WE888_3200x2400.jpg?x-oss-process=image/resize,m_fill,w_340,h_345/format,webp',
            'https://qhrenderpicoss.kujiale.com/r/2019/02/12/L3D187S8ENDIF6YAUAUI5MI27M23P3WO888_3840x2160.jpg?x-oss-process=image/resize,m_fill,w_340,h_255/format,webp',
            'https://qhrenderpicoss.kujiale.com/r/2019/05/22/L3D206S8ENDIH55ROYUI5NYALUF3P3WE888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_340,h_485/format,webp',
            'https://qhrenderpicoss.kujiale.com/r/2019/02/14/L3D206S8ENDIF5MJJQUI5NZUC2P3P3XO888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_340,h_315/format,webp',
            'https://qhrenderpicoss.kujiale.com/r/2019/05/17/L3D204S8ENDIHAZOCYUI5NFSLUF3P3WW888_1080x1080.jpg?x-oss-process=image/resize,m_fill,w_340,h_485/format,webp',
            'https://qhrenderpicoss.kujiale.com/r/2019/04/30/L3D206S8ENDIHMEGGQUI5NYALUF3P3X6888_2560x1440.jpg?x-oss-process=image/resize,m_fill,w_340,h_385/format,webp'
        ]
      }
  }

  componentDidMount () {
      // 监听（绑定）滚轮滚动事件
      waterfallDom = document.querySelector('#waterfall')
      waterfallDom.addEventListener('scroll', this.handleScroll, true)
      // 初始化数据
      this.setState({
        caseList: this.initImgsArr(0, 12)
      })
      // 窗口变化重新加载
      window.onresize = () => {
        this.setState({
          caseList: this.initImgsArr(0, 12)
        })
      }
  }

  handleScroll = () => {
    // 是否显示回到顶部按钮
    let show = this.myRef.current.scrollTop > 1000
    this.setState({
      isShow: show
    })

    // 滚到底部加载数据
    let scrollTop = this.myRef.current.scrollTop
    let scrollHeight = this.myRef.current.scrollHeight
    let clientHeight = this.myRef.current.clientHeight
    if (scrollHeight - clientHeight - scrollTop < 40) {
      this.fetchImgsData()
    }
  }

  smoothScroll = ()=> {
    let currentScroll = this.myRef.current.scrollTop
    if (currentScroll > 0) {
      requestAnimationFrame(this.smoothScroll)
      this.myRef.current.scrollTo(0, currentScroll - (currentScroll / 10))
    }
  }

  componentWillUnmount () {
    waterfallDom.removeEventListener('scroll', this.handleScroll)
    waterfallDom = null
  }

  initImgsArr = (n, m) => { //num 图片数量
    let arr = []
    for (let i = n; i < m; i++) {
        let index = Math.floor(Math.random() * 7)
        let url = this.state.randomList[index]
        arr.push({ id: i, src: url, link: '', info: '一些图片描述文字' })
    }
    return arr
  }

  fetchImgsData () {
    let fetchImgsArr = []
    for (let i = 0; i < 8; i++) {
        let index = Math.floor(Math.random() * 7 + 1)
        let url = this.state.randomList[index]
        fetchImgsArr.push({ id: this.state.caseList.length + i, src: url, link: '', info: '一些图片描述文字' })
    }

    let newCaseList = this.state.caseList.concat(fetchImgsArr)
    this.setState({
      caseList: newCaseList
    })
  }

  render() {
    const childElements = this.state.caseList.map(function(item, index){
    // const childElements = this.props.elements.map(function(element){
      return (
           <li className={styles.case_img} key={item.id}>
             <div>
              <img src={item.src} />
              <div className={styles.case_info}>
                <p className={styles.case_name}>万达饭店</p>
                <div className={styles.designer_info}>
                  <div name="designer-info-left">
                    <img className={styles.avater} src="https://qhyxpicoss.kujiale.com/avatars/2018/03/19/origin5466863111312800864.jpg@!60x60" />
                    <span className={styles.name}>艾瑞工作室</span>
                  </div>
                  <div name="designer-info-right">
                    <span>
                      <i></i>
                      <span>233</span>
                    </span>
                    <span className={styles.praise}>
                      <i></i>
                      <span>1</span>
                    </span>
                  </div>
                </div>
              </div>
             </div>
           </li>
       );
   });
    return (
      <div className={styles.case_container} id="waterfall" ref={this.myRef}>
         <Masonry
            className={styles.case_pane}// default ''
            elementType={'ul'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoadedOptions} // default {}
          >
            {childElements}
          </Masonry>
          <div className={styles.back_top + ' ' + (this.state.isShow ? styles.isShow : '')} onClick={this.smoothScroll}>
            <i></i>
            <span className={styles.back}>Top</span>
          </div>
      </div>
    );
  }
}
export default Case
