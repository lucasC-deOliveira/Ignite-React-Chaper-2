import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { FormEvent, useContext, useState } from "react";
import closeIcon from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { useTransactions } from "../../hooks/useTransactions";

Modal.setAppElement("#root");

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {
  const {createTransaction} = useTransactions()
  
  const [type,setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  


   async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type
    })
    onRequestClose()
    setTitle("")
    setAmount(0)
    setType("deposit")
    setCategory('')
  }

  return (
    <Modal
      isOpen={isOpen} //propriedade que define a exibição do modal
      onRequestClose={onRequestClose} //propriedade que fecha o modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button"
        onClick={onRequestClose}
        className="react-modal-close">
        <img src={closeIcon}></img>
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={()=>setType("deposit")}
            isActive={ type =="deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={()=>setType("withdraw")}
            isActive={ type =="withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button 
        type="submit"
        onClick={handleCreateNewTransaction}>
          cadastrar
        </button>

      </Container>
    </Modal>
  );
}
