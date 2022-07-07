import { useSelector } from "react-redux";

export const TotalMoney = () => {
  const {money} = useSelector(({initialMoney}) => initialMoney)
  return (
    <div className="bg-gray-200 w-36 p-2 flex flex-col justify-center items-center rounded-md">
      <h2 className="text-[#1E293B] text-lg">Total</h2>
      <p className="text-[#1E293B] text-sm">{Number(money).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
    </div>
  )
} 