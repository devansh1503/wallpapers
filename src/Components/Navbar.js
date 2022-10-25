import React, { useRef } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import LaptopTwoToneIcon from '@mui/icons-material/LaptopTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar(props) {
    const input = useRef()
    const nav = {
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        color:"white",
        backgroundColor:"rgb(38, 38, 38)",
        padding:"10px",
        position:"sticky",
        top:"0%"
    }
    const search = {
        display:"flex",
        alignItems:"center"
    }
    const ulcss = {
        listStyle:"none",
        display:"flex"
    }
    const inp = {
        width:"30vw",
        background:"none",
        border:"none",
        color:"white",
        padding:"7px",
        fontSize:"20px",
        borderBottom:"2px solid white",
        marginRight:"15px"
    }
    const history = useNavigate()
    const onclickhandle = () =>{
      localStorage.setItem("keyitem",input.current.value)
      history('/search')
    }
    const togglesidebar = () =>{
      props.toggf(!props.currtogg)
      console.log(props.currtogg)
    }
  return (
    <div className='navbar' style={nav}>
      <div>
        <MenuIcon style={{cursor:"pointer"}} onClick={togglesidebar} />
      </div>
      <div style={{display:"flex",alignItems:"center"}}>
        <LaptopTwoToneIcon style={{fontSize:"38px"}}/>
        <h1>Wallpapers</h1>
      </div>
      <div style={search}>
        <input style={inp} ref={input} placeholder='Enter Keyword'/>
        <div onClick={onclickhandle}><SearchIcon/></div>
      </div>
      <ul style={ulcss}>
        <li><Link to='/' className='linktext'>Home</Link></li>
        <li><Link to='/upload' className='linktext'>Upload</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
