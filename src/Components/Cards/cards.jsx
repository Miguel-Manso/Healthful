import { Card, CardContent, CardImage, CardSeta} from "./style.jsx";

export const CardComp = ({background, titulo, subtitulo, texto}) => {
    return (
        <Card>
        <CardImage background={background}>
            <span>{titulo}</span>
        </CardImage>
            
        <CardContent>
            <span>{subtitulo}</span>
            <p>{texto}</p>
        </CardContent>

        <CardSeta>
            <span>&#8673;</span>
        </CardSeta>

        </Card>
    );
  };
  