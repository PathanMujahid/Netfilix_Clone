import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
            <div style={{ display: "inline-block", marginRight: "1.5rem" }}>
                <img
                    src={this.props.img}
                    style={{ width: "12rem", height: "15rem" }}
                    alt="test"
                />
                <p> {this.props.name} </p>
            </div>
        );
    }
}
export default Card;
