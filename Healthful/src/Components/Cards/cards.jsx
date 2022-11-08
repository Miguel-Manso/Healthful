import { Card, CardImage} from "./style.jsx";
import leite from "../../Assets/Placeholder/comidas.svg"

export const CardComp = () => {
    return (
        <Card>
        <CardImage background={leite}>
            <span className="titulo">Comidas Saudáveis</span>
        </CardImage>
            
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
  