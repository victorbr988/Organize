import { FiAlignJustify } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { FiBarChart } from 'react-icons/fi';

export const Header = ({modalOpen, setModalOpen}) => {
  

  return (
    <header className='bg-[#6EE7B7] flex items-center h-14'>
      <div className='flex justify-between flex-1 mx-2 items-center'>
        {!modalOpen ? (
          <FiAlignJustify
          onClick={() => setModalOpen(!modalOpen)}
          className='text-3xl text-[#1E293B]'
        />
        ):(
          <FiX
          onClick={() => setModalOpen(!modalOpen)}
          className='text-3xl text-[#1E293B]'
        />
        )}
        
        <h2 className='text-xl text-[#1E293B]'>Organize</h2>
        <FiBarChart className='text-3xl' />
      </div>
    </header>
  );
};
