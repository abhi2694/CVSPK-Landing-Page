import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/portfolio/nsut2.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Brief Overview of CVSPK Scheme</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h4>A student may apply under any one of the three subschemes</h4>
                <div className="list-style">
                  <div>
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
