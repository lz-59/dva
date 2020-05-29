import { get, post} from '@/utils/request'
import api from './api'

//默认数据
export const defaultData = () => get(api.defaultData)

//添加数据
export const addData = obj => post(api.addData, obj)

//修改数据
export const upData = obj => post(api.upData, obj)

//删除数据
export const delData = obj => post(api.delData, obj)