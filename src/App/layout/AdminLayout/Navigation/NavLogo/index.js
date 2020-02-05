import React from 'react';
import DEMO  from './../../../../../store/constant';
import Aux from "../../../../../hoc/_Aux";

import a from '../../../../../assets/images/logo/logo.png';

const navLogo = (props) => {
    let toggleClass = ['mobile-menu'];
    if (props.collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <Aux>
            <div className="navbar-brand header-logo">
                 <a href={DEMO.BLANK_LINK} className="b-brand">
                     <img src={a} alt='logo' />
                    {/*<div className="b-bg">
                        <i className="feather icon-trending-up" />
                    </div>
                    <span className="b-title">Datta Able</span>*/}
                 </a>
                <a href={DEMO.BLANK_LINK} className={toggleClass.join(' ')} id="mobile-collapse" onClick={props.onToggleNavigation}><span /></a>
            </div>
        </Aux>
    );
};

export default navLogo;
