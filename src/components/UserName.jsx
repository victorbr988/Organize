import { getUser } from '../helpers/sendDataStorage';
import { FiUser } from 'react-icons/fi';

export const UserName = () => {
  const { name } = getUser('UserData');
  return (
    <div className="flex gap-2 items-center mx-5">
      <div className="p-4 bg-gray-200 rounded-full drop-shadow-lg shadow-black">
        <FiUser className="text-xl" />
      </div>
      <h2 className="text-xl">{name}</h2>
    </div>
  );
};
