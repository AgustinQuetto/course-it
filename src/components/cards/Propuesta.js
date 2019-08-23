import React from "react";

class Propuesta extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const propuesta = this.props.data;
        return (
            <div className="mini-card">
                <div className="mini-card-image">
                    <img src={propuesta.logo || ""} />
                </div>
                <div className="mini-card-title">
                    {propuesta.title || "Titulo"}
                </div>
                <div className="mini-card-description">
                    {propuesta.description || "Descripcion"}
                </div>
            </div>
        );
    }
}

export default Propuesta;
