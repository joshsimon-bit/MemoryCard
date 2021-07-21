import React from "react";
import './MemoryCardBack.css';

class MemoryCard extends React.Component {
    render() {
        return <div className="MemoryCard">
            <div className="MemomoryCardInner">
                <div className="MemoryCardBack"> <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" />Memory Card</div>

                <div className="MemoryCardFront"> ∆ </div>
            </div>
        </div>
    }
};

export default MemoryCard;