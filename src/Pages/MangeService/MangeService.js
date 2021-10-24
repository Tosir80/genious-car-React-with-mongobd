import React, { useEffect, useState } from 'react';

const MangeService = () => {
    const [services, setServices] = useState([]);
      const [deleteCount, setDeleteCount] = useState(false);
    useEffect(() => {
      fetch('http://localhost:5000/services')
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, [deleteCount]);
    
    const deleteHandler=(id)=>{
        const url = `http://localhost:5000/service/${id}`;
        fetch(url,{
         method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            // dui vabei kora jai 
            // const remaining=services.filter(service=>service._id !==id)
            // setServices(remaining)
           setDeleteCount(data.acknowledged);
        })
    }
    return (
        <div>
            <h2>mange ser:-{services.length}</h2>
            <div>
                {services.map(service=><div>
                    <h4>{service.name}</h4>
                    <img src={service.img} alt="" />
                    <button onClick={()=>deleteHandler(service._id)}>Delete
                    </button>
                </div>)}
            </div>
        </div>
    );
};

export default MangeService;
