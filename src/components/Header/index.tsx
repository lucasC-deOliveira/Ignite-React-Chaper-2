import logo from ".././../assets/logo.svg";
import { Container, Content } from "./styles";

//definindo propriedades que serão recebidas
interface IHeaderProps{
    onOpenNewTransactionModal: () => void;
}


export function Header ({onOpenNewTransactionModal}:IHeaderProps) {

   
    return(
        <Container>
            <Content>
            <img src= {logo} alt='lc money' />
            <button type='button' onClick={onOpenNewTransactionModal} /*Chamando função do elemento pai*/ >
                Nova Transação
            </button>
           
            </Content>
        </Container>
    )
}