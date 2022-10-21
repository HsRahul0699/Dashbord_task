import React from 'react'
import office from './office rooms.jfif'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const ImageComp=(props)=>{
    return (
        <div>
            <div className="card imageCard" style={{width: '44.5rem',height:'424px', marginTop:'4px'}} >
                 <img className="card-img-top" src={office} alt="Card image cap" style={{width:'600px', height:'300px',
                marginTop:'70px', marginLeft:'50px'}}/>
                      
            </div>
        </div>
        
    )
}

export default ImageComp