import React from 'react';
import './addservice.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
const AddService = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) =>{
    // axious-------
      axios.post('http://localhost:5000/services', data)
        .then(res=>{
           if(res.data.insertedId){
               alert("data added sucessfully")
               reset()
           }
        });
  }
  return (
    <div>
      <h2>add service</h2>
        <div className="addservice">
        {/* react-hook-form */}
         <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true, maxLength: 20 })} placeholder="Name" />
        <textarea {...register('despriction')} placeholder="Description" />
        <input type='number' {...register('price')} placeholder="Price" />
        <input {...register('img')} placeholder="image url" />
        <input type='submit' />
      </form>
        </div>
    </div>
  );
};

export default AddService;
