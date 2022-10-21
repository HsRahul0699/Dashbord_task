import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import '../App.css'
import * as ChartModuleMore from 'highcharts/highcharts-more.js';
import HCSoldGauge from 'highcharts/modules/solid-gauge';
import "bootstrap-icons/font/bootstrap-icons.css";

ChartModuleMore(Highcharts);
HCSoldGauge(Highcharts);

const Comp2=(props)=>{
    const {type,title,free,now}=props
    console.log(title,type)
    const arr=[{num:910,name:'Haltian Z1A',description:'thingsee air',type:'AIR PRESSURE'},
               {num:24,name:'Haltian Z1B',description:'thingsee air',type:'TEMPERATURE'} ,
               {num:49,name:'Haltian Z1C',description:'thingsee air',type:'HUMIDITY'}
               ]
    const options=type=='speedometer'?{

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: '180px',
            
        },
    
        title: {
            text: `${title}`,
            align:'left',
            style:{
                fontSize:'14px',
                fontWeight:'bold'
            },
            y:-0.2
        },
    
        pane: {
            startAngle: -90,
            endAngle: 89.9,
            background: null,
            center: ['50%', '75%'],
            size: '110%'
        },
    
        // the value axis
        yAxis: {
            min: 0,
            max: 200,
            tickPixelInterval: 72,
            tickPosition: 'inside',
            tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
            tickLength: 20,
            tickWidth: 2,
            minorTickInterval: null,
            labels: {
                distance: 20,
                style: {
                    fontSize: '12px'
                }
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B', // green
                thickness: 20
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D', // yellow
                thickness: 20
            }, {
                from: 160,
                to: 200,
                color: '#DF5353', // red
                thickness: 20
            }]
        },
    
        series: [{
            name: 'Speed',
            data: [80],
            tooltip: {
                valueSuffix: ' km/h'
            },
            dataLabels: {
                format: '{y} km/h',
                borderWidth: 0,
                color: (
                    Highcharts.defaultOptions.title &&
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || '#333333',
                style: {
                    fontSize: '16px'
                }
            },
            dial: {
                radius: '80%',
                backgroundColor: 'gray',
                baseWidth: 12,
                baseLength: '0%',
                rearLength: '0%'
            },
            pivot: {
                backgroundColor: 'gray',
                radius: 6
            }
    
        }]
    
    }:
    {

        chart: {

            type: 'column',
            height:'170px'
        },

        title: {
            useHTML: true,
            text: free=='true'?`${title}`+' '+'<span style="color:white;background-color:green;padding:3px; border-radius:5px;font-size:10px">Free</span>':`${title}`,
            align:'left',
            style:{
                fontSize:'14px',
                fontWeight:'bold'
            },
            y:-0.3
        },

        xAxis: {

            categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],

            crosshair: false,
            labels: {
                enabled: false
              }

        },

        yAxis: {

            min: 0,

            title: {

                text: 'Rainfall (mm)'

            },
            labels: {
                enabled: false
              }

        },

        tooltip: {

            headerFormat: '<span>{point.key}</span><table>',

            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +

                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',

            footerFormat: '</table>',

            shared: true,

            useHTML: true

        },

        plotOptions: {

            column: {

                pointPadding: 0.2,

                borderWidth: 0

            }

        },

        series: [{
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
        }]

    }
    return (
        <div style={{padding:'3px'}}>
           
            <div className="card" style={{width: '22.2rem',height:'13rem'}} >
                <div className="card-body" >
                    {type=='ratings'?
                    <div>
                        <p className="card-title" style={{fontSize:'13px',fontWeight:'bold', 
                    fontFamily: "Lucida Sans Unicode"}}>
                        {title}</p>
                        <div className='row'>
                            <div className='col-2' style={{border:'none',minHeight:'1px'}}></div>
                            <div className='col-8' style={{border:'none',minHeight:'1px'}} >
                                <p>
                                    <i class="bi bi-star-fill" style={{color:'orange',fontSize:'36px'}}></i>
                                    <i class="bi bi-star-fill" style={{color:'orange',fontSize:'36px'}}></i>
                                    <i class="bi bi-star-fill" style={{color:'orange',fontSize:'36px'}}></i>
                                    <i class="bi bi-star-fill" style={{color:'orange',fontSize:'36px'}}></i>
                                    <i class="bi bi-star-fill" style={{fontSize:'36px'}}></i><br />
                                </p>
                                <p style={{textAlign:'center'}}>4.0</p>
                                <p style={{textAlign:'center'}}>Average Ratings</p>
                            </div>
                            <div className='col-2' style={{border:'none',minHeight:'1px'}}></div>
                        </div>
                                
                     </div>:
                     title=='Air Quality Index'?
                     (<>
                        <p className="card-title" style={{fontSize:'13px',fontWeight:'bold', fontFamily: "Lucida Sans Unicode"}}>
                            {title}
                        </p>
                        
                        <div className='row' style={{marginTop:'25px'}}>
                        {arr.map((ele)=>{
                            return (
                                <div className='col-4' style={{minHeight:'1px', border:'none', width:'110px',textAlign:'center'}}>
                                    <b style={{fontSize:'18px',color:'orange'}}><p>{ele.num}</p></b>
                                    <p style={{fontSize:'10px'}}>{ele.name}</p>
                                    <p style={{fontSize:'9px'}}>{ele.description}</p>
                                    <p style={{fontSize:'12px', fontWeight:'bold'}}>{ele.type}</p>
                                </div>
                            )
                        })}
                        </div>
                      </>
                     ):
                     title=='Fault Reports'?(
                        <>
                            <p className="card-title" style={{fontSize:'13px',fontWeight:'bold', fontFamily: "Lucida Sans Unicode"}}>
                              {title}
                            </p>
                            <div className='row' style={{width:'240px'}}>
                                <div className='col-md-3'  style={{border:'none',minHeight:'1px'}}>
                                    <i class="bi bi-car-front"></i>
                                </div>
                                <div className='col-md-9'  style={{border:'none',minHeight:'1px'}}>
                                     <span style={{fontSize:'13px'}}>Parking Slots almost full</span>
                                     <p style={{fontSize:'8px'}}>2 mins ago</p>
                                </div>
                            </div>
                            <div className='row' style={{width:'320px'}}>
                                <div className='col-md-3'  style={{border:'none',minHeight:'1px'}}>
                                    <i class="bi bi-tools"></i>
                                </div>
                                <div className='col-md-9' style={{border:'none',minHeight:'1px'}}>
                                     <span style={{fontSize:'13px',marginLeft:'-19px'}}>Energy Utilization increased by 20%</span>
                                     <p style={{fontSize:'8px',marginLeft:'-19px'}}>2 mins ago</p>
                                </div>
                            </div>
                            
                            
                        </>
                     ):
                <HighchartsReact highcharts={Highcharts} options={options} />}
                    

                </div>
            </div>
        </div>
    )
}

export default Comp2