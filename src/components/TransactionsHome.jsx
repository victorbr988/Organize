import { ButtonAddTransaction } from './ButtonAddTransaction';
import { CampExpense } from './CampExpense';
import { CardTransacton } from './CardTransaction';
import { TotalMoney } from './TotalMoney';
import { FiShoppingBag } from 'react-icons/fi';
import { FiScissors } from 'react-icons/fi';

export const TransactionsHome = ({ setModalAdd, modalAdd }) => {
  return (
    <div className=" w-full flex flex-col  justify-between min-h-screen">
      <section className="flex justify-between mx-5 flex-2 mt-10">
        <TotalMoney />
        <CampExpense />
      </section>

      <section className=" w-full mt-12 ">
        <ButtonAddTransaction setModalAdd={setModalAdd} modalAdd={modalAdd} />
      </section>

      <main className="flex-1 bg-gray-200 mt-10 rounded-t-[35px]">
        <CardTransacton name={'Alimentação'} value={'R$ 400.00'}>
          <FiShoppingBag className="text-2xl text-[#1E293B]" />
        </CardTransacton>
        <CardTransacton name={'Beleza'} value={'R$ 40.00'}>
          <FiScissors className="text-2xl text-[#1E293B]" />
        </CardTransacton>
      </main>
    </div>
  );
};
