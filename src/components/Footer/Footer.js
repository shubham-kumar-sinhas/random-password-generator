import React from "react";

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p>Created using <b>React</b> by <b className="has-text-info"><a href="https://www.linkedin.com/in/shubham-kumar-sinha">Shubham Kumar Sinha</a></b></p>
                    <p className="field">
                        <a className="button is-large" href="https://shubham-kumar-sinhas.github.io/" title="View source code on GitHub">
                            <span className="icon is-small">
                                <i className="fab fa-github"></i>
                            </span>
                            <span>GitHub</span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
