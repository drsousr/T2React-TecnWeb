import React from "react";
import { useState } from "react";

function Header(){

    const [Select, setSelect] = useState(false);

    const Open = () => setSelect(true);
    const Close = () => setSelect(false);

    return(

        <header>
            <div className="icon">
                <img 
                style={{height: '100px', width: '100px'}}
                src="/src/imgs/icon.png"/>
            </div>
            <div className="div-header">
                <h1>Previsão do Tempo</h1>
            </div>
            <div className="select">
                <span
                style={{justifyContent: "center", alignItems: 'center', display: "flex", gap: 10}}>
                    Selecione a região 
                    <button
                    onClick={Open}
                    style={{backgroundColor: 'transparent', border: 'none'}}
                    >
                        <img 
                        style={{height: '30px', width: '25px'}}
                        src="/src/imgs/traco.png"/>
                    </button>
                </span>
            </div>

        </header>
        
        

    )
}

export default Header;