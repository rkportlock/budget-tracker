import React from 'react';

export default class NavBar extends React.Component {
    render () {
        return (
            <div className="row">
        <div className="col-sm">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="index.html">
              Home
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.nerdwallet.com/article/finance/how-to-budget">
                    Budget Tips
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="https://www.purposefulfinance.org/home/articles/the-15-minute-basic-budget?gclid=Cj0KCQjwyYKUBhDJARIsAMj9lkGLhFDCXN9rDDVnUr76WKEpBWKiWo-Nm5_11m6uI_CzZ0_WXxb-HGUaAuCsEALw_wcB">
                    Helpful Websites
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
        )
    };
};

