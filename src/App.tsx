import { GlobaStyle } from './styles/global';
import {Header} from './components/Header'
import { Dashboard } from './components/Dashboard';
import {NewTransactionModal} from './components/NewTransactionModal';
import { useState } from 'react';
import { TransactionsProvider } from './hooks/useTransactions';




export function App() {
  //estado para abrir e fechar modal
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);
  //função para abrir modal
  function handleOpenNewTransactionModal(){
  setNewTransactionModalOpen(true)
  }
  //função para fechar modal
  function handleCloseNewTransactionModal(){
  setNewTransactionModalOpen(false)
  } 
  return (
     
   <TransactionsProvider> {/*Passando contexo de transações*/}
      
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} //repassando propriedade pro componente filho
      /> 

      <Dashboard/>
      
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>

      <GlobaStyle/> {/*Estilo global*/}
     </TransactionsProvider>

  );
}


