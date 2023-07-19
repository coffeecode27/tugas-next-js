import React, { useEffect, useState } from 'react'
import InsertRegion from './insertRegion';
import UpdateRegion from './updateRegion';
import region from '../api/region'

export default function Region() {
    const [Region,setRegion] = useState<any[]>([])
    const [refresh, setRefresh] = useState(false);
    const [display, setDisplay] = useState(false);
    const [editData, setEditData]= useState(false);
    const [regID, setRegID]= useState(0);
    useEffect(() => { // get data ketika pertama kali render
      region.getAllData().then( (data) => { setRegion(data)})
    },[])

    const handleEdit = async (id:any) => {
      setRegID(id);
      setEditData(true);
  }

    const handleDelete = async (id:any) => {
        region.deleted(id).then(()=>{
          window.alert("Data berhasil dihapus!")
          setRefresh(true)
        }).catch((err) => {
          console.log(err.message)
        })
    }
    
return (
    <div className='mt-4'>
    {display ? (<InsertRegion setRefresh={setRefresh} setDisplay={setDisplay} />) : (
        <>
        <div>
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
                Region && Region.map(item => {
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
      {editData && <UpdateRegion setEditData={setEditData} setRefresh={setRefresh} regID={regID}/>}
    </div>
        </>
    )}
    </div>
  )


  // return (
  //   <div>
  //     { }
  //     <h2>List Region</h2>
  //     <table>
  //       <thead>
  //           <tr>
  //               <th>Region ID</th>
  //               <th>Region Name</th>
  //               <th>Region Photo</th>
  //           </tr>
  //       </thead>
  //       <tbody>
  //           {
  //               Region && Region.map(item => {
  //                   return (
  //                       <>
  //                       <tr>
  //                           <th>
  //                              {item.regionId} 
  //                           </th>
  //                           <td>
  //                               {item.regionName}
  //                           </td>
  //                           <td>
  //                               {item.photo}
  //                           </td>
  //                       </tr>
  //                       </>
  //                   )
  //               })
  //           }
  //       </tbody>
  //     </table>
  //   </div>
  // )
}