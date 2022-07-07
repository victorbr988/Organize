import { ButtonAddTransaction } from './ButtonAddTransaction';
import { CampExpense } from './CampExpense';
import { CardTransacton } from './CardTransaction';
import { TotalMoney } from './TotalMoney';
import { FiScissors, FiHome, FiSmartphone } from 'react-icons/fi';
import { MdOutlineFastfood, MdOutlineDirectionsBusFilled } from 'react-icons/md'
import { useSelector } from 'react-redux';

export const TransactionsHome = ({ setModalAdd, modalAdd }) => {

  const transaction = useSelector(({userTransaction}) => userTransaction)
  console.log(transaction)
  
  const categoryTypes = {
    Alimentação: <MdOutlineFastfood className="text-2xl text-[#1E293B]" />,
    Beleza: <FiScissors className="text-2xl text-[#1E293B]" />,
    Aluguel: <FiHome className="text-2xl text-[#1E293B]" />,
    Lazer: <FiSmartphone className="text-2xl text-[#1E293B]" />,
    Transporte: <MdOutlineDirectionsBusFilled className="text-2xl text-[#1E293B]" />
  }

  return (
    <div className=" w-full flex flex-col  justify-between min-h-screen">
      <section className="flex justify-between mx-5 gap-2 flex-2 mt-10">
        <TotalMoney />
        <CampExpense />
      </section>

      <section className=" w-full mt-12 ">
        <ButtonAddTransaction setModalAdd={setModalAdd} modalAdd={modalAdd} />
      </section>

      <main className="flex-1 bg-gray-200 mt-10 rounded-t-[35px]">
        {
          transaction.map(({category, values}) => {
            return (
            <CardTransacton name={category} value={values}>
              {categoryTypes[category]}
            </CardTransacton>
            )
          })
        }
      </main>
    </div>
  );
};
