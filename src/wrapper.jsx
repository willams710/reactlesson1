import React, { Component } from 'react'

export default class Wrapper extends Component {
  render() {
    return (
      <>
        <section className="wrapper">
            <div className="wrapper-about">
           <h2>Featured Jobs</h2>
           <p>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
            </div>
            <div className="wrapper-content"></div>
            <div className="wrapper-footer">
                <button>See More Jobs <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"></path></svg></button>
            </div>
        </section>
      </>
    )
  }
}
