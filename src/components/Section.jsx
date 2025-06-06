import React from "react";

function Section(){
    return(

        <section>

            <main>
                <div className="div-infs" style={{display: "flex", height: "50%", width: "100%"}}>
                    <span className="temperatura-container">
                        <img className="icone-temperatura" src="../src/imgs/sol.png" />
                        <span className="temperatura">28º</span>
                    </span>
                    <span className="clima-container">
                        <div>
                            <span className="titulo-clima">Clima</span>
                            <p className="info-clima">Domingo, 16:00</p>
                        </div>
                    </span>
                </div>

                <div style={{display: "flex", width: "100%", height: "50%",justifyContent: "center", gap: "20px", alignItems: "center"}}
                >
                    <span className="Wday">
                        <span className="WeekTitle">Seg.</span>
                        <img className="span-icons"
                        src="../src/imgs/chuva.png"/>
                    </span>
                    <span className="Wday">
                        <span className="WeekTitle">Ter.</span>
                        <img className="span-icons"
                        src="../src/imgs/chuva.png"/>
                    </span>
                    <span className="Wday">
                        <span className="WeekTitle">Quar.</span>
                        <img className="span-icons"
                        src="../src/imgs/chuva.png"/>
                    </span>
                    <span className="Wday">
                        <span className="WeekTitle">Quin.</span>
                        <img className="span-icons"
                        src="../src/imgs/chuva.png"/>
                    </span>
                    <span className="Wday">
                        <span className="WeekTitle">Sex.</span>
                        <img className="span-icons"
                        src="../src/imgs/chuva.png"/>
                    </span>
                    <span className="Wday">
                        <span className="WeekTitle">Sáb.</span>
                        <img className="span-icons"
                        src="../src/imgs/chuva.png"/>
                    </span>
                    <span className="Wday">
                        <span className="WeekTitle">Dom.</span>
                        <img className="span-icons"
                        src="../src/imgs/chuva.png"/>
                    </span>
                </div>
            </main>

        </section>

    )
}

export default Section;