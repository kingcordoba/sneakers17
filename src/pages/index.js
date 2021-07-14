import React from 'react'

const Home = (props) => {
    return (
        <div style={{
            display: 'flex', 
            justifyContent:'center', 
            alignItems:'center',
            height: '90vh'
            }}>
            <h1>{props.titulo}</h1>
        </div>
    )
}

export default Home
