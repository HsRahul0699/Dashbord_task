import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Comp1 from './Comp1';
import ImageComp from './ImageComp';
import Comp2 from './Comp2';
import '../App.css';
import Comp4 from './Comp4';

const Dashboard=(props)=>{
    return (
        <div className='dashboard' style={{width:'95%', marginLeft:'30px'}}>
        <div className='container-fluid' >
            <div className='row '>
                <div className='col-md-6 ' style={{display:'flex',justifyContent:'center'}}><ImageComp /></div>
                <div className='col-md-3 '>
                    <div className='row'>
                        <div className='col-md-6 colDesign' style={{display:'flex',justifyContent:'center'}}><Comp1 title='Energy Consumption'/></div>
                        <div className='col-md-6 colDesign' style={{display:'flex',justifyContent:'center'}}><Comp1 title='Energy Sources' type='speedometer'/></div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 'style={{display:'flex',justifyContent:'center'}}><Comp2 type='speedometer' title='Energy Consumption history' /></div>
                        
                    </div>
                    
                </div>
                <div className='col-md-3 ' style={{display:'flex',justifyContent:'center'}}><Comp4 title='Alerts' /></div>
            </div>
            
            <div className='row '>
                <div className='col-md-3 ' style={{display:'flex',justifyContent:'center'}}><Comp2 type='piechart' title='Total Occupancy' now='now-12'/></div>
                <div className='col-md-3 'style={{display:'flex',justifyContent:'center'}}><Comp2 type='speedometer' title='Booked Desks'/></div>
                <div className='col-md-3 'style={{display:'flex',justifyContent:'center'}}><Comp2 type='piechart' title='Environment Social Governance'/></div>
                <div className='col-md-3 'style={{display:'flex',justifyContent:'center'}}><Comp2 type='speedometer' title='Fault Reports'/></div>
            </div>
            <div className='row'>
                <div className='col-md-3 ' style={{display:'flex',justifyContent:'center'}}><Comp2 type='piechart' title='Booked Meeting Rooms' free='true'/></div>
                <div className='col-md-3 ' style={{display:'flex',justifyContent:'center'}}><Comp2 type='piechart' title='Air Quality Index'/></div>
                <div className='col-md-3 ' style={{display:'flex',justifyContent:'center'}}>
                    <div className='row'>
                        <div className='col-md-6 ' style={{display:'flex',justifyContent:'center'}}><Comp1 title='Washroom' free='true' type='stacked bar' /></div>
                        <div className='col-md-6 ' style={{display:'flex',justifyContent:'center'}}><Comp1 title='Washroom (AQI)' type='speedometer'/></div>
                    </div>
                    
                </div>
                
                <div className='col-md-3 ' style={{display:'flex',justifyContent:'center'}}><Comp2 title='Feedback' type='ratings'/></div>
            </div>
        </div>
        </div>

    )
}

export default Dashboard