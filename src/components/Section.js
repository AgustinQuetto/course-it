import React from "react";

class Section extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className="section"
                style={{
                    backgroundColor: this.props.backgroundColor || "white"
                }}
            >
                <div className="title">
                    <h3>{this.props.title || "Titulo"}</h3>
                    <div className="dots" />
                </div>
                <div className="content">{this.props.children}</div>
            </div>
        );
    }
}

export default Section;
