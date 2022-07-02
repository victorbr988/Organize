import { ButtonEnter } from './ButtonEnter';
import { NavLink } from 'react-router-dom';

export const Form = () => {
  return (
    <section className="bg-white h-80 rounded-t-[35px] ">
      <form className="">
        <div className=" my-8 mx-3">
          <input
            type="text"
            placeholder="Nome"
            className="mb-3 p-1 outline-none text-lg border-b-2 w-full"
          />
          <input
            type="password"
            placeholder="Senha"
            className="mt-2 p-1 outline-none text-lg border-b-2 w-full"
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
