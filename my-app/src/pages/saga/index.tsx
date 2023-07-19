import { GetRegionReq,DeleteRegionReq } from '@/redux-saga/action/regionAction'
import React, {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import InsertRegionSaga from './insertRegionSaga'
import UpdateRegionSaga from './updateRegionSaga'

export default function RegionSaga() {
    const dispatch = useDispatch()
    const {regions} = useSelector((state:any) => state.regionState)
    const [display, setDisplay] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [editData, setEditData]= useState(false);
    const [regID, setRegID]= useState(0);
    useEffect(()=> {
        dispatch(GetRegionReq())
    },[dispatch])

    const handleEdit = async (id:any) => {
        setRegID(id);
        setEditData(true);
      }
    
    const handleDelete = async (id:any) => {
        dispatch(DeleteRegionReq(id))
        window.alert(`Data Deleted`);
        setRefresh(true)
    };

  return (
    <div className='mt-4'>
      {display ? (<InsertRegionSaga setDisplay={setDisplay} setRefresh={setRefresh} />) : (
        <>
         <button className="flex justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  onClick={() => setDisplay(true)}>Add Regions</button>
                <h2>List Region</h2>
            <table>
                <thead>
                    <tr>
                        <th>Region ID</th>
                        <th>Region Name</th>
                        <th>Region Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        regions && regions.map((item: any) => {
                            return (
                                <>
                                <tr>
                                    <th>
                                    {item.regionId} 
                                    </th>
                                    <td>
                                        {item.regionName}
                                    </td>
                                    <td>
                                        {item.photo}
                                    </td>

                                    <td className='px-2'>
                                        <button className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => handleEdit(item.regionId)}>
                                            Edit
                                        </button>
                                    </td>
                            
                                    <td>
                                        <button className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => handleDelete(item.regionId)}>
                                            Delete
                                        </button>
                                    </td>

                                 </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
            {editData && <UpdateRegionSaga setEditData={setEditData} setRefresh={setRefresh} regID={regID}/>}
        </>
      )}
    </div>
  )
}