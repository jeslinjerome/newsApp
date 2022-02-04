import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge bg-danger"> {source} </span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://images.hindustantimes.com/img/2021/11/08/1600x900/682d571e-409e-11ec-b1ea-9df134a746cb_1636384858278.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unkown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <Link
              to={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-danger btn-sm"
            >
              Read more...
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
