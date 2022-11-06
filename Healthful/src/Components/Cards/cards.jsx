import { Card} from "./style.jsx";


export const CardComp = () => {
    return (
        <Card>
        <div className="img">
            <span className="titulo">Comidas Saudáveis</span>
        </div>
            
        <div className="content">
            <span className="subtitulo">Importância de Comer Bem!</span>
            <p className="descricao">Comidas saudáveis são importantes porque...</p>
        </div>

        <div className="seta">
            <span className="sseta">&#8673;</span>
        </div>

        </Card>
    );
  };
  