import axios from "axios"

// api
function getSliderList() {
    return axios.get("/api/slider")
}

function getComponyList() {
    return axios.get("/api/compony")
}

export default {
    namespace: 'home',
    state: {
        sliderList: [], // 跑马灯
        processList: [
            {
                id: '1',
                title: '免费设计',
                desc: '获取三份设计方案',
                url: '/assets/img/design.jpg'
            },
            {
                id: '2',
                title: '免费报价',
                desc: '算算装修要花多少钱',
                url: '/assets/img/price.jpg'
            },
            {
                id: '3',
                title: '全屋定制',
                desc: '让家轻松扩大n平方',
                url: '/assets/img/order.jpg'
            },
            {
                id: '4',
                title: '装修分期',
                desc: '按月付款轻松住新家',
                url: '/assets/img/stages.jpg'
            },
            {
                id: '5',
                title: '全程质检',
                desc: '20元/平请老师盯工地',
                url: '/assets/img/quality.jpg'
            }
        ], // 家装进程列表
        componyList: [] // 公司列表
    },
    effects: {
        *getSliderList(action, { call, put }) {
            // data: {code, data}
            const { data: {data: sliderList} } = yield call(getSliderList)
            yield put({ type: 'initSliderList', payload: sliderList })
        },
        *getComponyList(action, { call, put }) {
            const { data: {data: componyList} } = yield call(getComponyList)
            yield put({ type: 'initComponyList', payload: componyList })
        }
    },
    reducers: {
        initSliderList(state, { payload }) {
            state.sliderList = payload
            return state;
        },
        initComponyList(state, { payload }) {
            state.componyList = payload
            return state;
        },
    }
}