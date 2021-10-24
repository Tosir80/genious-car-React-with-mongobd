import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service,setService]=useState({})
    const { serviceId } = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            <h6>Name: {service.name}</h6>
            <img src={service.img} alt="" />
        </div>
    );
};

export default Booking;