import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Upload() {
  const [url, seturl] = useState("")
  const title = useRef()
  const Keywords = useRef()
  const dburl = "http://localhost:3333/pictures"
  const [len, setLen] = useState(0)
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(dburl)
      setLen(response.data.length)
    }
    fetchData()
  }, [])
  function onchangehandle(event) {
    seturl(event.target.value)
  }
  let keyarr = []
  let obj = {}
  const history = useNavigate()
  const uploadHandle = (event) => {
    event.preventDefault()
    const key = Keywords.current.value
    keyarr = key.split(" ")
    obj = {
      "id": len + 1,
      "title": title.current.value,
      "url": url,
      "keywords": keyarr
    }
    updata()
    history('/')
  }
  const updata = async () => {
    console.log(obj)
    await axios.post(dburl, obj);
  }
  const butt = {
    border:"none",
    backgroundColor:"indigo",
    margin:"20px",
    color:"white",
    fontSize:"20px",
    padding:"5px",
    cursor:"pointer"
}
  return (
    <div className='upload'>
      <form>
        <label>
          Title:
          <input ref={title} placeholder='Enter Title' />
        </label>
        <label>
          Keywords:
          <input ref={Keywords} placeholder='Enter Keywords with space' />
        </label>
        <label>
          Upload File:
          <input onChange={onchangehandle} placeholder='Enter URL of image' />
        </label>
        <img src={url} style={{ width: "35vw", boxShadow: "none" }}></img>
        <button style={butt} onClick={uploadHandle}>UPLOAD</button>
      </form>
    </div>
  )
}

export default Upload

