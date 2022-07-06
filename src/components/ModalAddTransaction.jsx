import { useState } from 'react';
import { FiDollarSign, FiX, FiAlignLeft } from 'react-icons/fi';
import { BsCalendarDate } from 'react-icons/bs';
import { InputTransaction, SelectCategory, SelectType } from './InputTransaction';
import { ButtonSaveTransaction } from './ButtonAddTransaction';
import { v4 } from 'uuid';

export const ModalAddTransaction = ({ modalAdd, setModalAdd }) => {
  const [transactionData, setTransactionData] = useState({
    id: v4(),
    values: 0,
    type: 'Despesa',
    date: '',
    description: '',
    category: 'Alimentação',
  });
  // console.log(transactionData)

  return (
    <div className="pb-8">
      <header className="w-full mt-5 flex justify-end pr-5">
        <FiX onClick={() => setModalAdd(!modalAdd)} className="text-2xl" />
      </header>

      <InputTransaction
        placeholder={'Ex R$ 300.00'}
        type={'number'}
        name={'values'}
        id={1}
        setTransactionData={setTransactionData}
        transactionData={transactionData}
      >
        <FiDollarSign className="text-lg text-[#1E293B]" />
        <p className=" text-lg text-[#1E293B]">Valor</p>
      </InputTransaction>

      <div className="mx-5">
        <SelectType setTransactionData={setTransactionData} transactionData={transactionData} />
      </div>

      <InputTransaction
        placeholder={'Ex 12/12/2022'}
        type={'date'}
        name={'date'}
        id={3}
        setTransactionData={setTransactionData}
        transactionData={transactionData}
      >
        <BsCalendarDate className="text-lg text-[#1E293B]" />
        <p className="text-lg text-[#1E293B]">Data</p>
      </InputTransaction>

      <InputTransaction
        placeholder={'Ex comprei um xbox...'}
        name={'description'}
        id={4}
        setTransactionData={setTransactionData}
        transactionData={transactionData}
      >
        <FiAlignLeft className="text-xl text-[#1E293B]" />
        <p className="text-lg text-[#1E293B]">Descrição</p>
      </InputTransaction>

      <div className="mx-5">
        <SelectCategory setTransactionData={setTransactionData} transactionData={transactionData} />
      </div>
      <div className="m-5">
        <ButtonSaveTransaction
          setModalAdd={setModalAdd}
          modalAdd={modalAdd}
          state={transactionData}
        />
      </div>
    </div>
  );
};
