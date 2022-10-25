import axios from 'axios'
import fileDownload from 'js-file-download'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dowload() {
    const url = localStorage.getItem('currUrl')
    const dburl = "http://localhost:3333/pictures"
    const title = localStorage.getItem('currTitle')
    const [rec, setRec] = useState([])
    const history = useNavigate()
    useEffect(() => {
        async function fetchdata() {
            const response = await axios.get(dburl)
            const ele = response.data
            const arr = [ele[ele.length - 1], ele[ele.length - 2], ele[ele.length - 3], ele[ele.length - 4]]
            setRec(arr)
        }
        fetchdata()
        window.scrollTo(0, 0)
    }, [])
    const imgcss = {
        width: "50vw",
        margin: "30px",
        marginTop:"10%"

    }
    const butt = {
        border: "none",
        backgroundColor: "crimson",
        margin: "20px",
        color: "white",
        fontSize: "20px",
        padding: "5px",
        cursor: "pointer"
    }
    return (
        <div style={{ display: "flex" }}>
            <div>
                <img src={url} style={imgcss}></img>
            </div>
            <div style={{marginTop:"5%"}}>
                <h2 style={{ color: "white" }}>{title}</h2>
                <button style={butt} onClick={() => window.location.href = url}>Download</button>
                <div>
                    <h2 style={{color:"white"}}>RECENT UPLOADS</h2>
                    <div style={{display:"flex", flexWrap:"wrap"}}>
                    {rec.map((item) => {
                        return <div className='card' style={{width:"15vw"}} onClick={() => {
                            localStorage.setItem('currUrl', item.url)
                            localStorage.setItem('currTitle', item.title)
                            history('/download')
                        }}>
                            <img src={item.url}></img>
                            <p style={{ color: "white", fontSize: "20px" }}>{item.title}</p>
                        </div>
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dowload
