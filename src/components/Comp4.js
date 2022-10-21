import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Comp4=(props)=>{
    const {title}=props
    const texts=['Airpressure from THINGSEE_AIR . HIGH : 909.25','LUMNIS from THINGSEE_AIR . LOW : 13.00',
                'Tvoc from THINGSEE_AIR . LOW : 48.00 ']
    return (
        <div style={{padding:'3px'}}>
            <div className="card" style={{width: '22rem',height:'425px'}} >
                <div className="card-body">
                    <p className="card-title" style={{fontSize:'13px', fontWeight:'bold',
                    fontFamily: "Lucida Sans Unicode"}}>
                        {title}</p>
                    <p>
                        {/* <i class="bi bi-exclamation-triangle-fill" style={{color:'red'}}></i> */}
                        {texts.map((ele)=>{
                            return (
                                <div className='row'>   
                                    <div className='col-2' style={{border:'none', minHeight:'6px'}}>
                                        <i class="bi bi-exclamation-triangle-fill" style={{color:'red'}}></i>&nbsp;
                                    </div>
                                    <div className='col-7' style={{border:'none',minHeight:'6px',width:'170px'}}>
                                        <span style={{fontSize:'13px'}}>{ele} </span>
                                        <p style={{fontSize:'8px'}}>Few seconds ago</p>
                                    </div>
                                    <div className='col-3' style={{border:'none',minHeight:'6px'}}>
                                        <div className='row'>
                                            <div className='col-6' style={{border:'none', minHeight:'3px'}}>
                                                <button className="btn btn-dark btn-sm"><i class="bi bi-telephone-fill" style={{width:'8px',height:'8px'}} ></i></button>
                                            </div>
                                            <div className='col-6' style={{border:'none', minHeight:'3px'}}>
                                             <button className="btn btn-dark btn-sm"><i class="bi bi-person-check-fill"></i></button>
                                            </div>
                                        </div>
                                        
                                        
                                    </div> 
                                </div>
                            )
                        })}
                    </p>
                </div>
             </div>
        </div>
    )
}

export default Comp4