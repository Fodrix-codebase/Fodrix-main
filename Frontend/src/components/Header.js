import React from 'react'
import '../css/Header.css'

export default function Header() {
    return (
        <header className="container-fluid con" >
        <div className="row">
          <div className="col-3"></div>
          <div className="col-5 column" >
              <h5 className="text-center font">Fodrix the new Lifestyle</h5>
          </div>
          <div className="col-4 column" >
            <h6 className="text-muted "><span class="fa fa-phone"> <small className="number">0120-125489</small></span></h6>
          </div>
        </div>
        </header>
    );
}