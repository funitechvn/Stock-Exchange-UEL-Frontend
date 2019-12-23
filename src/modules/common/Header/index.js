import React, { Component } from "react";

class Header extends Component {
  render() {
    const {title, imgBackground = 'https://placehold.it/1600x800' } = this.props;
    return (
      <section className="overlape">
        <div className="block no-padding">
          <div
            data-velocity="-.1"
            style={{
              background: `url(${imgBackground}) scroll 50% 422.28px transparent`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
            className="parallax scrolly-invisible no-parallax"
          />
          <div className="container fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-header">
                  <h3>{title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
