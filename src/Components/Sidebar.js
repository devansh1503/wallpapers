import React from 'react'
import { Link } from "react-router-dom"
function Sidebar() {
    const css = {
        position: "fixed",
        backgroundColor: "rgb(38, 38, 38)",
        color: "white",
        padding: "30px",
        top: "8.5%",
        height: "100vh"
    }
    const ul = {
        listStyle: "none",
        marginTop: "20px"
    }
    return (
        <div style={{ position: "relative" }}>
            <div style={css}>
                <h1 style={{color:"orange"}}>Categories</h1>
                <ul style={ul}>
                    <li style={{ marginBottom: "10px" }} onClick={
                        () => localStorage.setItem('keyitem', 'nature')}
                    ><Link to='/search' className='linktext'>Nature</Link></li>
                    <li onClick={() => localStorage.setItem('keyitem', 'abstract')} style={{ marginBottom: "15px" }}><Link to='/search' className='linktext'>Abstract</Link></li>
                    <li onClick={() => localStorage.setItem('keyitem', 'neon')} style={{ marginBottom: "15px" }}><Link to='/search' className='linktext'>Neon</Link></li>
                    <li onClick={() => localStorage.setItem('keyitem', 'cars')} style={{ marginBottom: "15px" }}><Link to='/search' className='linktext'>Cars</Link></li>
                    <li onClick={() => localStorage.setItem('keyitem', 'tech')} style={{ marginBottom: "15px" }}><Link to='/search' className='linktext'>Tech</Link></li>
                    <li onClick={() => localStorage.setItem('keyitem', 'minimalist')} style={{ marginBottom: "15px" }}><Link to='/search' className='linktext'>Minimalist</Link></li>
                    <li onClick={() => localStorage.setItem('keyitem', 'space')} style={{ marginBottom: "15px" }}><Link to='/search' className='linktext'>Space</Link></li>
                    <li onClick={() => localStorage.setItem('keyitem', 'superhero')} style={{ marginBottom: "15px" }}><Link to='/search' className='linktext'>Superhero</Link></li>
                    <li onClick={() => localStorage.setItem('keyitem', 'city')} style={{ marginBottom: "15px" }}><Link to='/search' className='linktext'>City</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
