import {call,put} from 'redux-saga/effects'
import region from '../../pages/api/region';
import { 
     GetRegionFail,
     GetRegionSuccess,
     PostRegionSuccess,
     PostRegionFail,
     DeleteRegionSuccess,
     DeleteRegionFail,
     PutRegionSuccess,
     PutRegionFail 
    } from '../action/regionAction'

function* handleGetRegion():any {
    try {
        const result = yield call(region.getAllData)
        yield put(GetRegionSuccess(result))
    } catch (error) {
        yield put(GetRegionFail(error))
    }
}

function* handlePostRegion(action:any):any {
    const {payload} = action
    try {
        const result = yield call(region.upload,payload)
        yield put(PostRegionSuccess(result.data))
    } catch (error) {
        yield put(PostRegionFail(error))
    }
}

function* handleDeleteRegion(action:any):any {
    const {payload} = action
    try {
        const result = yield call(region.deleted,payload)
        yield put(DeleteRegionSuccess(payload))
    } catch (error) {
        yield put(DeleteRegionFail(error))
    }
}

function* handlePutRegion(action:any):any {
    const {payload} = action
    try {
        const result = yield call(region.sagaUpdate,payload)
        yield put(PutRegionSuccess(result.data))
        console.log(result.data)
    } catch (error) {
        yield put(PutRegionFail(error))
    }
}

export {
    handleGetRegion,
    handlePostRegion,
    handleDeleteRegion,
    handlePutRegion,
}