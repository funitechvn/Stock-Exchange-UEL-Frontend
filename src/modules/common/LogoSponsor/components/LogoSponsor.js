import React, { Component } from "react";

import LogoSponsorItem from "./LogoSponsorItem";

class LogoSponsor extends Component {
  render() {

    return (
      <section>
        <div className="block">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading">
                  <h2>Logo các nhà tài trợ</h2>
                  <span>Some of the companies we've helped recruit excellent applicants over the years.</span>
                </div>
                <div className="comp-sec">
                  
                  <LogoSponsorItem />
                  <LogoSponsorItem />
                  <LogoSponsorItem />
                  <LogoSponsorItem />
                  <LogoSponsorItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LogoSponsor;
