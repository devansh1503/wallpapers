import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Searchpage() {
    const key = localStorage.getItem('keyitem').toLowerCase()
    const [data, setData] = useState([])
    const url = "http://localhost:3333/pictures"
    const history = useNavigate()
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url)
            setData(response.data)
        }
        fetchData()
    }, [])
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                data.map((item) => {
                    if (item.keywords.includes(key)) return <div className='card' onClick={() => {
                        localStorage.setItem('currUrl', item.url)
                        localStorage.setItem('currTitle', item.title)
                        history('/download')
                    }}>
                        <img src={item.url}></img>
                        <p style={{ color: "white", fontSize: "20px" }}>{item.title}</p>
                    </div>
                })
            }

        </div>
    )
}

export default Searchpage
