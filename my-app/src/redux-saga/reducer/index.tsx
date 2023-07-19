import {combineReducers} from 'redux'
import RegionReducer from './regionReducer'

const rootReducer = combineReducers({
    regionState : RegionReducer
})

export default rootReducer