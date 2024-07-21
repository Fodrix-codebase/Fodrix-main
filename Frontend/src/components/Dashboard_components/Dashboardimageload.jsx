import React, { Component } from "react";
import userdata from "./userdata.json";
let apiKey= null
// let apiKey = process.env.REACT_APP_CITY_HOME+"/downloadbycity/181";

export class Dashboardimageload extends Component {

  constructor (props){
    super(props);
    this.state={
      profileImg:
      "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
    }
  }
  


//   async componentDidMount(){
//   let url= apiKey;
//   let imagedata= await fetch(url);
//   let userImage= await imagedata.json();
//   console.log('https://api.fodrix.com//downloadbycity/181');
//   console.log(userImage);
//   this.setState({
//     profileImg:userImage
//   })

// }

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div className="page">
        <div className="container">
          <div className="img-holder">
            <img
              src={apiKey ? apiKey : this.state.profileImg}
              alt="no img"
              id="img_dashboardupload"
              className="img_dashboardupload"
            />
            <span> Welcome {localStorage.getItem("userFirstName")}! </span>{" "}
          </div>{" "}
          <div className="label">
            <label htmlFor="input" className="image-upload">
              <input
                type="file"
                name="image-upload"
                id="input"
                accept="image/*"
                onChange={this.imageHandler}
              />{" "}
            </label>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Dashboardimageload;
