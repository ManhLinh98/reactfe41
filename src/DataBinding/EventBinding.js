import React, { Component } from 'react'

export default class EventBinding extends Component {

    handleClick = (name)=>{alert("Hello "+ name)}

    render() {
        return (
            <div className="container">
                event binding
                <br/>
                {/* Cách 1 định nghĩa funtion trực tiếp */}
                {/* <button onClick={()=>{alert("Hello FE41")}} id="btnShowMessage" className="btn btn-success">Show Message</button> */}

             {/* Cách 1 định nghĩa funtion trực tiếp có tham số */}
                <button onClick={()=>{this.handleClick("Linh");}} id="btnShowMessage" className="btn btn-success">Show Message</button>

                {/* Cách 2: truyền callback funtion => khi click funtion đó đc gọi */}
                {/* <button onClick={this.handleClick.bind(this,"Linh")} id="btnShowMessage" className="btn btn-success">Show Message</button> */}

            </div>
        )
    }
}
