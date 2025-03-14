import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let titleSytle = {
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    };
    let imageStyle = {
      height: "40vh",
    };
    let descStyle = {
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      height: "10vh",
    };
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
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            style={imageStyle}
            src={
              imageUrl === null
                ? "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/08/02/news.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={titleSytle}>
              {title}
            </h5>
            <p className="card-text" style={descStyle}>
              {description}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
