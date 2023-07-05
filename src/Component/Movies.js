import React, { Component } from "react";
import Card from "./Card";

class Movies extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { list } = this.props;
        return (
            <div style={{ padding: "2rem" }}>
                <div>Series</div>
                <div style={{ padding: "1.7rem" }}>
                    {list.map((l, idx) => (
                        <Card name={l.MoviesList_name} img={l.img_url} key={`MoviesList -${idx}`} />
                    ))}
                    {/* <Card name={list[0].MoviesList_name} img={list[0].img_url} /> */}
                </div>
            </div>
        );
    }
}

export default Movies;