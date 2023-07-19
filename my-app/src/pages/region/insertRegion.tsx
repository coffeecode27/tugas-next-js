import React, { useState } from "react";
import region from '../api/region';

const InsertRegion = (props: any) => {
  const [value, setValue] = useState({name: undefined});

  const handleChange = (name:any) => (event:any) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const onSubmit = async () => {
    const payload = {
      name: value.name,
    };

    await region.create(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data success Create");
      window.location.href = "/region"
    });
  };

  return (
    <div>
      <h2>Add Regions</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Region Name :</label>
          <input
            className="text-neutral-800"
            type="text"
            placeholder="Name"
            onChange={handleChange("name")}
          ></input>
        </div>
        <div className="flex mt-6 mx-20">
          <button className="flex justify-center mx-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">Simpan</button>
          <button className="flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => props.setDisplay(false)}>cancel</button>
        </div>
      </form>
    </div>
  );
}

export default InsertRegion