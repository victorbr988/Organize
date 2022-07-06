import { FiPlus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setValue } from '../Redux/slices/addTransaction';

export const ButtonAddTransaction = ({ setModalAdd, modalAdd }) => {
  return (
    <div className="flex justify-end">
      <button onClick={() => setModalAdd(!modalAdd)} className="rounded-full bg-[#6EE7B7] p-5">
        <FiPlus className="text-2xl" />
      </button>
    </div>
  );
};

function handleSendDispatch(setModalAdd, modalAdd, state, dispatch ) {
  dispatch(setValue(state))
  setModalAdd(!modalAdd)
}
export const ButtonSaveTransaction = ({ setModalAdd, modalAdd, state }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex ">
    <button 
      onClick={ () => handleSendDispatch(setModalAdd, modalAdd, state, dispatch) }
      className="flex justify-between rounded-md w-full text-[#1E293B] bg-[#6EE7B7] p-3">
        Adicionar transação
      <FiPlus className="text-2xl" />
    </button>
  </div>
  )
  
}
