import React, { Fragment } from 'react';

import { BsMoon } from 'react-icons/bs';

const Navbar = () => {
  return (
    <Fragment>
        <nav className="bg-white shadow-md">
            <div className="nav-container theme flex justify-between items-center py-6">
                <div className="nav__logo font-semibold">Where in the world</div>
                <div className="nav__theme flex items-center gap-3">
                    <span className="theme__img"><BsMoon /></span>
                    <span className="theme__text font-semibold">Dark mode</span>
                </div>
            </div>
        </nav>
    </Fragment>
  )
}

export default Navbar