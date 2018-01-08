import React from 'react';

const HomeCard = (props) => {
    return(
        <div className="col-12 col-sm-4">
            <div className="card" style={{width: '20rem'}}>
                <img className="card-img-top rounded mx-auto d-block"  style={{padingTop: '3px', width: '100px', heigth: '100px'}}src="../logo2.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">{props.text}</h4>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary" onClick={props.action}>Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default HomeCard;