import React, { Component } from 'react'

export default class Exstate2 extends Component {
    state={
        urlImg:"./img/CarBasic/products/black-car.jpg",
    }
    doiHinh =(color) =>{
        
        let newUrl =`./img/CarBasic/products/${color}-car.jpg`;
        this.setState({
            urlImg:newUrl,
        })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <img src= {this.state.urlImg} alt="123" style={{width:'100%'}}></img>
                    </div>
                    <div className="col-6">
                        <div className="row">
                        <div className="col-4">
                            <button onClick={()=>{this.doiHinh('red');}} className="btn" style={{background:'red'}}>Red Color</button>
                        </div>
                        <div className="col-4">
                            <button onClick={()=>{this.doiHinh('silver');}} className="btn" style={{background:'silver'}}>Silver Color</button>
                        </div>
                        <div className="col-4">
                            <button onClick={()=>{this.doiHinh('black');}} className="btn" style={{background:'black'}}>Black Color</button>
                        </div>

                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
