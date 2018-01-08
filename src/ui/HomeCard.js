import React from 'react';

const HomeCard = (props) => {
    return(
        <div className="col-12 col-sm-4">
            <div className="card" style={{padingTop: '7px'}}>
                <img className="card-img-top rounded mx-auto d-block"  style={{padingTop: '3px', width: '100px', heigth: '100px'}}src="../logo2.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">{props.text}</h4>
                    <p className="card-text">{props.text}</p>
                    <button className="btn btn-primary" onClick={props.action}>{props.title}</button>
                </div>
            </div>
        </div>
    );
}

export default HomeCard;