import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Section from "./components/Section";
import Curso from "./components/cards/Curso";
import Propuesta from "./components/cards/Propuesta";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cursos: [
                {
                    title: "Frontend Avanzado",
                    headerColor: "#41b9ca",
                    subtitle: "Inscripciones abiertas",
                    description:
                        "Aumentá tu nivel en Frontend aprendiendo React, Redux y NextJS."
                },
                {
                    title: "Desarrollo Frontend",
                    headerColor: "#e9608e",
                    subtitle: "CURSO EN PROGRESO",
                    description:
                        "Aprendé a crear sitios web desde cero con HTML, CSS, Javascript, React y Node."
                }
            ],
            propuestas: [
                {
                    logo: "https://courseit.com.ar/static/icons/camara-web.png",
                    title: "Reviví cada clase",
                    description:
                        "Todas las clases son grabadas para que puedas volver a verlas tantas veces como te sea necesario."
                },
                {
                    logo: "https://courseit.com.ar/static/icons/charlar.png",
                    title: "Nunca perdés una clase",
                    description:
                        "Todas las clases se pueden tomar de forma presencial o remota."
                },
                {
                    logo: "https://courseit.com.ar/static/icons/apoyar.png",
                    title: "Estás acompañado",
                    description:
                        "Un equipo de trabajo especializado te acompaña durante toda la cursada."
                }
            ]
        };
    }
    render() {
        return (
            <div className="App">
                <Section title="Nuestros cursos y carreras">
                    {this.state.cursos.map(curso => {
                        return <Curso data={curso} />;
                    })}
                </Section>
                <Section
                    title="Nuestra propuesta de valor"
                    backgroundColor="#f0f2ff"
                >
                    {this.state.propuestas.map(propuesta => {
                        return <Propuesta data={propuesta} />;
                    })}
                </Section>
            </div>
        );
    }
}

export default App;
