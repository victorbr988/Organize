import { ListSelectCategory } from '../components/ListSelectCategory';
import { ListSelectType } from '../components/ListSelectType';
import { FiGrid, FiAlertCircle } from 'react-icons/fi';

export const InputTransaction = ({
  children,
  placeholder,
  id,
  name,
  type = 'text',
  setTransactionData,
  transactionData,
}) => {
  function handleValue({ target }) {
    setTransactionData({ ...transactionData, [target.name]: target.value });
  }

  console.log();
  return (
    <div className="flex flex-col gap-4 items-start mx-5 mt-8">
      <label className="flex items-center gap-3" htmlFor={id}>
        {children}
      </label>
      <input
        name={name}
        className={`bg-gray-200 p-2 rounded-md w-full ${type === 'date' && 'input-container'}`}
        type={type}
        id={id}
        value={transactionData[name]}
        onChange={handleValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export const SelectCategory = ({ setTransactionData, transactionData }) => {
  return (
    <div className="mt-4">
      <label className="flex items-center gap-3">
        <FiGrid className="text-xl text-[#1E293B]" />
        <p className="text-lg text-[#1E293B]">Categoria</p>
      </label>
      <ListSelectCategory
        setTransactionData={setTransactionData}
        transactionData={transactionData}
      />
    </div>
  );
};
export const SelectType = ({ setTransactionData, transactionData }) => {
  return (
    <div className="mt-4">
      <label className="flex items-center gap-3">
        <FiAlertCircle className="text-xl text-[#1E293B]" />
        <p className="text-lg text-[#1E293B]">Tipo</p>
      </label>
      <ListSelectType setTransactionData={setTransactionData} transactionData={transactionData} />
    </div>
  );
};
