import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const url = "https://my-json-server.typicode.com/devansh1503/database/pictures"
    const [data,setData] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(url)
            setData(response.data)
        }
        fetchData()
    },[])
    const history = useNavigate()
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {
                data.map((item)=>{
                    return <div className='card' onClick={()=>{
                        localStorage.setItem('currUrl',item.url)
                        localStorage.setItem('currTitle',item.title)
                        history('/download')
                    }}>
                        <img src={item.url}></img>
                        <p style={{color:"white",fontSize:"20px"}}>{item.title}</p>
                    </div>
                })
            }

        </div>
    )
}

export default Home
