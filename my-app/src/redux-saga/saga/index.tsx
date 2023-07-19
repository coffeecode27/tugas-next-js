import {takeEvery,all} from 'redux-saga/effects'
import * as ActionRegion from '../constant/regionConstant'
import { handleDeleteRegion, handleGetRegion,handlePostRegion, handlePutRegion } from './regionSaga'
function* watchAll(){
    yield all([
        takeEvery(ActionRegion.GET_DATA_REQ,handleGetRegion),
        takeEvery(ActionRegion.POST_DATA_REQ,handlePostRegion),
        takeEvery(ActionRegion.DELETE_DATA_REQ,handleDeleteRegion),
        takeEvery(ActionRegion.PUT_DATA_REQ,handlePutRegion),
    ])
}

export default watchAll