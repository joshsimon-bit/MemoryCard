import React from "react";
import './MemoryCard.css';



class MemoryCard extends React.Component {
    clickHandler(){
        alert("card clicked")};
    render() {
        return <div className="MemoryCard" onClick={this.clickHandler}>
            <div className="MemoryCardInner">
                <div className="MemoryCardBack"> <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" /></div>

                <div className="MemoryCardFront"> ∆ </div>
            </div>
        </div>
    }
};

export default MemoryCard;