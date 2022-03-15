import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';


import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
    {/*Maneira atualizada de recuperar dados de um contexto*/ }
    const { transactions } = useTransactions()

    //adicionando logica para calcular os dashboards
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === "deposit") {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }
        else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })
    return (
        <Container>
            {/*Maneira ultrapassada de obter dados de algum contexto*/}
            {/* <TransactionContext.Consumer>
               {(data) => {
                   console.log(data)
                   return (<p>Ok</p>)
               }}
              
           </TransactionContext.Consumer>
            */}

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"></img>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: "currency",
                    currency: "BRL"
                }).format(summary.deposits)
                }</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas"></img>
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR', {
                                        style: "currency",
                                        currency: "BRL"
                                    }).format(summary.withdraws)
                                    }</strong>
            </div>
            <div className='highlight-backgroud'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"></img>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                                        style: "currency",
                                        currency: "BRL"
                                    }).format(summary.total)
                                    }</strong>
            </div>
        </Container>
    )
}