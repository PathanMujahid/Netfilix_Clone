import React, { Component } from "react";
import Card from "./Card";

class WebSeries extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { list } = this.props;
        console.log({ list });
        return (
            <div style={{ padding: "2rem" }}>
                <div>Series</div>
                <div style={{ padding: "1.7rem" }}>
                    {list.map((l, idx) => (
                        <Card name={l.WebSeries_name} img={l.img_url} key={` WebSeries-${idx}`} />
                    ))}
                    {/* <Card name={list[0].WebSeries_name} img={list[0].img_url} /> */}
                </div>
            </div>
        );
    }
}

export default WebSeries;