import React, { useState } from "react";
import region from '../api/region';

const UpdateRegion = (props:any) => {
  const [value, setValue] = useState({
    name: undefined,
  });
  const handleUpdate = (name:any) => (event:any) => {
    setValue({ ...value, [name]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      name: value.name,
      id: props.regID,
    };
    await region.commonUpdate(payload).then(() => {
      props.setRefresh(true);
      props.setEditData(false)
      window.alert("Data success Update");
    });
  };
  return (
    <div>
      <h2>Update Regions</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Region Name :</label>
          <input
           className="text-neutral-800"
            type="text"
            placeholder="Name"
            onChange={handleUpdate("name")}
          ></input>
        </div>
        <div className="flex mt-6 mx-20">
          <button className="flex justify-center mx-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">Simpan</button>
          <button className="flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => props.setEditData(false)}>cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateRegion 