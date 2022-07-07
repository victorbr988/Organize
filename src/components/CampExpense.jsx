import { useSelector } from "react-redux"

export const CampExpense = () => {
  const transaction = useSelector(({userTransaction}) => userTransaction)
  let totalExpense = !transaction ? transaction.reduce((prev, curr) => Number(prev.values) + Number(curr.values)) : 0;
  return (
    <div className="bg-[#1E293B] w-36 p-2 flex flex-col justify-center items-center rounded-md">
      <h2 className="text-white text-lg text-start">Despesa</h2>
      <p className="text-white text-sm">{totalExpense.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
    </div>
  )
} 