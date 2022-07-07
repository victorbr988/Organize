
export const CardTransacton = ({children, name, value}) => {
  return (
    <div className="mx-5 mt-5 max-w-sm border-l-8 border-gray-900 rounded bg-white p-3">
      <div className="flex justify-between">
        <h2 className="rounded-full bg-[#6EE7B7] p-3">
          {children}
        </h2>
        <div>
          <h2 className='text-[#1E293B]'>{name}</h2>
          <h2>{Number(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h2>
        </div>
        <button type='button' className='text-[#1E293B]'>Detalhes</button>
      </div>
    </div>
  );
};
