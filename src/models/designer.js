import axios from "axios"

// api
function getStarDesigners() {
    return axios.get("/api/starDesigners")
}
function getHighCustom() {
    return axios.get("/api/highCustom")
}

function getDesignerList() {
    return axios.get("/api/designerList")
}

export default {
    namespace: 'designer',
    state: {
        starDesigners: [], // 明星设计师
        custom: {
            styleList: [],
            areaList: [],
            typeList: []
        },   // 高级自定义
        designerList: []  // 设计师
    },
    effects: {
        *getStarDesigners(action, { call, put }) {
            const { data: {data: starDesigners} } = yield call(getStarDesigners)
            yield put({ type: 'initStarDesigners', payload: starDesigners })
        },
        *getHighCustom(action, { call, put }) {
            const { data: {data: custom} } = yield call(getHighCustom)
            yield put({ type: 'initHighCustom', payload: custom })
        },
        *getDesignerList(action, { call, put }) {
            const { data: {data: designerList} } = yield call(getDesignerList)
            yield put({ type: 'initDesignerList', payload: designerList })
        }
    },
    reducers: {
        initStarDesigners(state, { payload }) {
            state.starDesigners = payload
            return state;
        },
        initHighCustom (state, { payload }) {
            state.custom = payload
            return state;
        },
        initDesignerList (state, { payload }) {
            state.designerList = payload
            return state;
        }
    }
}