import { defaultData, delData, addData, upData } from '@/services/home'
export default {

  namespace: 'home',

  state: {
    data: [],
  },

  subscriptions: {
    firstData({ dispatch, history }) {  // eslint-disable-line
      dispatch({type: 'defaultData'})
    },
  },

  effects: {
    *defaultData({ payload }, { call, put }) {  // eslint-disable-line
      const data = yield call(defaultData)
      yield put({ 
        type: 'defaultDatas',
        payload: data.users
      })
    },
    *delData({ payload }, { call, put }) {  
      const data = yield call(() => delData(payload))
      yield put({ 
        type: 'delDatas',
        payload: { status: data.status, id: payload.id }
      })
    },
    *addData({ payload }, { call, put }) {  
      const data = yield call(() => addData(payload))
      yield put({ 
        type: 'addDatas',
        payload: data.status 
      })
    },
    *upData({ payload }, { call, put }) {  
      const data = yield call(() => upData(payload))
      yield put({ 
        type: 'upDatas',
        payload: data.status 
      })
    },
  },

  reducers: {
    defaultDatas(state, action) {
      return { ...state, data: action.payload };
    },
    delDatas(state, { payload }) {
      if(Number(payload.status) === 200){
        state.data = state.data.filter(i => i.id !== payload.id)
        console.log("删除成功")
      }else{
        console.log("删除失败")
      }
      return { ...state, data: state.data };
    },
    addDatas(state, { payload }) {
      if(Number(payload) === 200){
        console.log("添加成功")
      }else{
        console.log("添加失败")
      }
      return { ...state };
    },
    upDatas(state, { payload }) {
      if(Number(payload) === 200){
        console.log("修改成功")
      }else{
        console.log("修改失败")
      }
      return { ...state };
    },
  },

};