import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import * as ChartModuleMore from 'highcharts/highcharts-more.js';
import HCSoldGauge from 'highcharts/modules/solid-gauge';

const Comp1=(props)=>{
    const {title,type,free}=props
    const options=type=='stacked bar'?{
        chart: {
            type: 'bar',
            height:'175px',
        
        },
        title: {
            text: free=='true'?`${title}`+' '+'<span style="color:white;background-color:green;padding:3px; border-radius:5px;font-size:10px">Free</span>':`${title}`,
            align:'left',
            useHTML: true,
            y:-0.5,
            style:{
                fontSize:'13px',
                fontWeight:'bold'
            }
        },
        xAxis: {
            categories: ['2020/21', '2019/20', '2018/19']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Usage'
            },
            labels: {
                distance: 20,
                style: {
                    fontSize: '1px'
                }
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: '',
            data: [4, 4, 6]
        }, {
            name: '',
            data: [5, 3, 12]
        }]
    }:{

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
            y:-0.5,
            style:{
                fontSize:'13px',
                fontWeight:'bold',
                
            }
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
                    fontSize: '10px'
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
                    fontSize: '13px'
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
    
    }
    return (
        <div style={{padding:'3px'}}>
            <div className="card" style={{width: '175px',height:'13rem'}} >
                <div className="card-body">
                    
                    {type?<HighchartsReact highcharts={Highcharts} options={options} />:
                    (<div style={{padding:'3px'}}>
                    <p className="card-title" style={{fontSize:'13px',fontWeight:'bold', 
                    fontFamily: "Lucida Sans Unicode",marginTop:'-4px'}}>
                        {title}</p>
                    <center><h1 className="card-text">95.17</h1></center>
                    <center><h1 className="card-text">Kw</h1></center></div>)}
                </div>
             </div>
        </div>
    )
}

export default Comp1