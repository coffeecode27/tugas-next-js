import * as ActionRegion from '../constant/regionConstant'

export const GetRegionReq = () =>({
    type:ActionRegion.GET_DATA_REQ
})

export const GetRegionSuccess = (payload : any) => ({
    type: ActionRegion.GET_DATA_OK,
    payload
})

export const GetRegionFail = (payload: any) => ({
    type: ActionRegion.GET_DATA_FAIL,
    payload
})

export const PostRegionReq = (payload : any) =>({
    type:ActionRegion.POST_DATA_REQ,
    payload
})

export const PostRegionSuccess = (payload : any) => ({
    type: ActionRegion.POST_DATA_OK,
    payload
})

export const PostRegionFail = (payload: any) => ({
    type: ActionRegion.POST_DATA_FAIL,
    payload
})

export const DeleteRegionReq = (payload : any) =>({
    type:ActionRegion.DELETE_DATA_REQ,
    payload
})

export const DeleteRegionSuccess = (payload : any) => ({
    type: ActionRegion.DELETE_DATA_OK,
    payload
})

export const DeleteRegionFail = (payload: any) => ({
    type: ActionRegion.DELETE_DATA_FAIL,
    payload
})

export const PutRegionReq = (payload : any) =>({
    type:ActionRegion.PUT_DATA_REQ,
    payload
})

export const PutRegionSuccess = (payload : any) => ({
    type: ActionRegion.PUT_DATA_OK,
    payload
})

export const PutRegionFail = (payload: any) => ({
    type: ActionRegion.PUT_DATA_FAIL,
    payload
})