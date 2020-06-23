import React, { Component } from "react";

export default class State extends Component {
  //nếu như islogin=true là người đã đăng nhập=> hển thị thông tin cin chào user
  //ngược lại isLogin=false chưa đăng nhập, hiển thị nút đăng nhập
  userName = "Linh";
//   isLogin=false;

//state là 1 thuộc tính của component => khi state thay đổi giá trị giao diện render lại
//lưu ý : các giá trị làm thay đổi giao diện thì đặt trong state
  state={
      isLogin :false,
  }
  renderLogin=() =>{
      if(this.state.isLogin){
      return  <a className="nav-link">Hello {this.userName}</a>
      }
      return <button className="nav-link" onClick={()=>{
        this.login();
      }}>Đăng Nhập</button>
  }

  login = () =>{
    // this.state.isLogin=true;//không đc gán giá trị cho thuộc tính state trực tiếp
    //this.setState(newState) : phương thưc của component thay đổi giá trị state hiện tại và render lại giao diện
    //phương thức state là 1 phương thưc bất đồng bộ
    this.setState({
        isLogin : true,
    },() =>{
        //call back thực hiện sau khi state mang giá trị mới
        console.log(this.state.isLogin);
    })
}
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Cybersoft
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                {/* cách 1: nên dùng cách 1 cho tường minh */}
                {this.renderLogin()};
                {/* cách 2  */}
                {/* {this.isLogin?<a className="nav-link">Hello {this.userName}</a> : <button className="nav-link">Đăng Nhập</button>} */}
              </li>
        
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
