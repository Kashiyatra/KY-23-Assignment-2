import React from "react";

export default function Acordian() {
  return (
    <div className="container">
      <h1
        className="title"
        style={{
          textAlign: "center",
          fontFamily: '"Silkscreen", sans-serif',
          marginBottom: "2%",
          fontSize: "5rem",
          color: "darkgrey",
        }}
      >
        F.A.Q
      </h1>
      <div
        className="accordion accordion-flush opacity-75"
        id="accordionFlushExample"
      >
        <div className="accordion-item opacity-50">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{
                fontFamily: '"Indie Flower", sans-serif',
                fontSize: "2rem",
              }}
            >
              What is Web Development?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                fontFamily: '"Indie Flower", sans-serif',
                fontSize: "1.5rem",
              }}
            >
              Web Development broadly refers to{" "}
              <code>
                the tasks associated with developing functional websites and
                applications for the Internet
              </code>
              . The web development process includes web design, web content
              development, client-side/server-side scripting and network
              security configuration, among other tasks.
            </div>
          </div>
        </div>
        <div className="accordion-item opacity-50">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={{
                fontFamily: '"Indie Flower", sans-serif',
                fontSize: "2rem",
              }}
            >
              What is HTML?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                fontFamily: '"Indie Flower", sans-serif',
                fontSize: "1.5rem",
              }}
            >
              HTML, aka <code>HyperText Markup Language</code>, is the dominant
              markup language for creating websites and anything that can be
              viewed in a web browser.
            </div>
          </div>
        </div>
        <div className="accordion-item opacity-50">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={{
                fontFamily: '"Indie Flower", sans-serif',
                fontSize: "2rem",
              }}
            >
              What is HTTP?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                fontFamily: '"Indie Flower", sans-serif',
                fontSize: "1.5rem",
              }}
            >
              HTTP, aka <code>HyperText Transfer Protocol</code>, is the
              underlying protocol used by the World Wide Web and this protocol
              defines how messages are formatted and transmitted, and what
              actions Web servers and browsers should take in response to
              various commands.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
