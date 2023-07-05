import React, { Component } from "react";
import Series from "./WebSeries";
import Movies from "./Movies";

class Netflix extends Component {
    constructor(props) {
        super(props);

        this.state = {
            WebSeries: [
                {
                    WebSeries_name: "Stranger Things",
                    img_url:
                        "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                },
                {
                    WebSeries_name: "Money Heist",
                    img_url:
                        "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg"
                },
                {
                    WebSeries_name: "Jamtara",
                    img_url:
                        "https://cdn.movietalkies.com/wp-content/uploads/2022/08/jamtara-trailer-230x345.jpg"
                },
                {
                    WebSeries_name: "Sacred Games ",
                    img_url:
                        "https://m.media-amazon.com/images/M/MV5BMjJlMjJlMzYtNmU5Yy00N2MwLWJmMjEtNWUwZWIyMGViZDgyXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_FMjpg_UX729_.jpg"
                },
                {
                    WebSeries_name: "Sacred Games ",
                    img_url:
                        "https://m.media-amazon.com/images/M/MV5BOTI3Y2E5NDQtNmY3OS00YzIxLWFjZjctMmE4NDA0MDc5OTM0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1080_.jpg"
                },
            ],
            MoviesList: [
                {
                    MoviesList_name: "Pinocchio",

                    img_url:
                        "https://upload.wikimedia.org/wikipedia/en/4/4a/Pinocchio_%282022_animated_film%29.jpg"

                },
                {
                    MoviesList_name: "Jumanji",
                    img_url:
                        "https://bingeddata.s3.amazonaws.com/uploads/2023/03/jumanji-welcome-to-the-jungle.jpg"
                },
                {
                    MoviesList_name: "Batman v Superman",
                    img_url:
                        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UY2700_.jpg"
                },
                {
                    MoviesList_name: "Journey 2",
                    img_url:
                        "https://m.media-amazon.com/images/M/MV5BMjMxMTg3OTY0NF5BMl5BanBnXkFtZTcwOTk2ODI3Nw@@._V1_FMjpg_UX424_.jpg"
                },
                {
                    MoviesList_name: "The Lost World: Jurassic Park",
                    img_url:
                        "https://m.media-amazon.com/images/M/MV5BMDFlMmM4Y2QtNDg1ZS00MWVlLTlmODgtZDdhYjY5YjdhN2M0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_FMjpg_UX800_.jpg"
                },
            ]
        };
    }

    render() {
        const { WebSeries, MoviesList } = this.state;
        console.log({ MoviesList })
        return (
            <div style={{ backgroundColor: "#000", color: "white", padding: "1rem" }}>
                <div style={{ color: "red" }}>
                    <img
                        src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"
                        style={{ width: "6rem" }}
                        alt="test"
                    />
                </div>

                <div>
                    <Series list={WebSeries} />
                </div>

                <div>
                    <Movies list={MoviesList} />
                </div>
            </div>
        );
    }
}

export default Netflix;