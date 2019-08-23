import React from "react";

class Curso extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        return (
            <div
                className="card-curso"
                style={{ backgroundColor: data.headerColor || "red" }}
            >
                <header>
                    <h3>{data.title || "Title card"}</h3>
                </header>
                <div>
                    <div className="card-curso-section-title">
                        {data.subtitle || "Subtitulo"}
                    </div>
                    <div className="card-curso-section-description">
                        {data.description || "Descripcion"}
                    </div>
                </div>
            </div>
        );
    }
}

export default Curso;
