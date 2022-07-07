import { ButtonEnter } from './ButtonEnter';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setName } from '../Redux/slices/userSlice';

export const Form = () => {
  const dispatch = useDispatch();
  
  function handleNameUser({ target }) {
    dispatch(setName(target.value));
  }


  return (
    <section className="bg-white h-80 w-full rounded-t-[35px] ">
      <form>
        <div className=" my-8 mx-3">
          <input
            onChange={handleNameUser}
            type="text"
            placeholder="Nome"
            className="mb-3 p-1 outline-none text-lg border-b-2 w-full"
          />
        </div>
        <div className="h-36 flex items-center justify-between">
          <ButtonEnter />
          <NavLink to={'/'} className="bg-[#E9D9D9] w-32 text-center mx-3 p-3 text-xl rounded-md">
            Voltar
          </NavLink>
        </div>
      </form>
    </section>
  );
};
