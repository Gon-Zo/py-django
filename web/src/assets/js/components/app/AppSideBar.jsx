import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as i from '@fortawesome/free-solid-svg-icons'

export default () => {
    return (
        <div className="border-right  bg-dark" id="sidebar-wrapper">
            {/*<div className="sidebar-heading sidebar-profile">*/}
            {/*    <Row>*/}
            {/*        <Col>*/}
            {/*            <Image width="150" height="150" src={imageSrc} className="user-profile"/>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*    <Row>*/}
            {/*        <Col>*/}
            {/*            <span>TEST</span>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*    <Row>*/}
            {/*        <Col>*/}
            {/*            <span>TEST</span>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</div>*/}
            <div className="list-group list-group-flush">
                <Link to="/" className="list-group-item list-group-item-action bg-light">
                    <FontAwesomeIcon icon={i.faHome}/>
                    <span>
                    Home
                    </span>
                </Link>
                <Link to="/user" className="list-group-item list-group-item-action bg-light">
                    <FontAwesomeIcon icon={i.faUser}/>
                    User
                </Link>
                <Link to="/dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                <Link to="/product" className="list-group-item list-group-item-action bg-light">Product</Link>
                <Link to="/" className="list-group-item list-group-item-action bg-light">Setting</Link>
            </div>
        </div>
    );
}
