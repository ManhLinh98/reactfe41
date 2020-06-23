import React, { Component } from 'react'

export default class ExState1 extends Component {
    state={
        like:1, //giá trị thay đỏi trên giao diện mỗi lần ng dùng thao tác sẽ đc lưu state
    }
    //hàm xử lý tăng lượt like
    like =()=>{
        let likeNumber = this.state.like +1;
        //dùng phương thức setState gán lại giá trị mới cho state => Giao diện tự động render lại
        this.setState({
            like:likeNumber
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="display-4"> Profile Lê Thị A</h3>

                <div className="card text-white bg-dark" style={{width:250}}>
                  <img className="card-img-top" src="https://image.plo.vn/w653/Uploaded/2020/xpckxpiu/2020_03_10/meo-plo_xiow.jpg" alt="123" style={{width:250}} />
                  <div className="card-body">
                    <p className="card-title">Họ Tên: Lê Thị A ({this.state.like} <i className="fa fa-heart"></i>)</p>
                    <p className="card-text">Tuổi: 18</p>
                  </div>
                </div>

                <div className=" card text-white bg-default">
                    <div className="card-body text-dark">
                        <h4 className="card-title">Lượt thích({this.state.like} <i className="fa fa-heart"></i>)</h4>
                        <button onClick={()=>{this.like();}} className="btn btn-default" style={{color:'red',border:'1px solid red'}}>Thả tim</button>
                    </div>
                </div>
            </div>
        )
    }
}
