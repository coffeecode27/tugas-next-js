import * as ActionType from "../constant/regionConstant"

const INIT_STATE = {
    regions: []
}

const RegionReducer = (state = INIT_STATE, action : any) => {
    switch (action.type) {
        case ActionType.GET_DATA_REQ :
            return {...state}
        case ActionType.GET_DATA_OK:
            return GetRegion(state,action)
        case ActionType.POST_DATA_REQ :
            return {...state}
        case ActionType.POST_DATA_OK:
            return PostRegion(state,action)
        case ActionType.DELETE_DATA_REQ :
            return {...state}
        case ActionType.DELETE_DATA_OK:
            return DeleteRegion(state,action)
        case ActionType.PUT_DATA_REQ :
            return {...state}
        case ActionType.PUT_DATA_OK:
            return PutRegion(state,action)    
        default:
            return {...state}
    }
}

const GetRegion = (state: any,action:any) => {
    return {
        ...state,
        regions: action.payload
    }
}

const PostRegion = (state:any,action:any) => {
    return {
        ...state,
        regions:[...state.regions, action.payload]
    }
}

const DeleteRegion = (state:any,action:any) => {
    const updatedData = state.regions.filter((row:any) => row.regionId !== action.payload);
    return {
        ...state,
        regions:updatedData
    }
}

const PutRegion = (state:any,action:any) => {
    const updatedRegion = action.payload;
    const updatedRegions = state.regions.map((region:any) =>
    region.regionId === updatedRegion.regionId ? updatedRegion : region
    );
    
    return {
        ...state,
        regions:updatedRegions
    }
}

export default RegionReducer