import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { PutRegionReq } from '@/redux-saga/action/regionAction';

const UpdateRegionSaga = (props:any) => {
  const dispatch = useDispatch();
  const [previewImg, setPreviewImage] = useState<string | undefined>();
  const [uploadData, setUploadData] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: undefined,
      file: undefined,
      id: undefined,
    },
    onSubmit: async (values:any) => {
      let payload = new FormData();
      payload.append("name", values.name);
      payload.append("file", values.file);
      payload.append("id", props.regID);
      dispatch(PutRegionReq(payload));
      props.setEditData(false);
      props.setRefresh(true);
      window.alert(`Data Successfully Update `+values.name);
    },
  });
  const uploadConfig = (name:any) => (event:any) => {
    let fileReader:any = new FileReader();
    const file = event.target.files[0];
    fileReader.onload = () => {
      formik.setFieldValue("file", file);
      setPreviewImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    setUploadData(true);
  };
  const onRemoveImg = (event:any) => {
    event.preventDefault();
    setPreviewImage(undefined);
    setUploadData(false);
  };
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Update Region</label>
        <input
          className="text-neutral-800 mt-10 rounded-sm ml-2"
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        ></input>
      </div>
      <div>
      <label>Photo</label>
        <div>
          {uploadData === false ? (
            <>
              <span>Kosong</span>
            </>
          ) : (
            <>
              <img src={previewImg} alt="img"></img>
              <span>
                <button className="rounded-md bg-red-600 px-3" type="button" onClick={onRemoveImg}>
                Remove
                </button>
              </span>
            </>
          )}
        </div>
        <div>
          <label>
            <span>upload a file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              onChange={uploadConfig("file")}
            ></input>
          </label>
        </div>
        <div>
        <div className="flex mt-6 mx-7">
          <button className="flex justify-center mx-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">Simpan</button>
          <button className="flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => props.setEditData(false)}>cancel</button>
        </div>
        </div>
      </div>
      </form>
    </div>
  );
}
export default UpdateRegionSaga