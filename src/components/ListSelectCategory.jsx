import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
// import { useDispatch } from 'react-redux'

const people = [
  { name: 'Alimentação' },
  { name: 'Aluguel' },
  { name: 'Transporte' },
  { name: 'Lazer' },
  { name: 'Saúde' },
  { name: 'Beleza' },
];

export const ListSelectCategory = ({ setTransactionData, transactionData }) => {
  const [select, setSelected] = useState(people[0]);
  
  function handleChangeCategory({name}) {
    setSelected({name})
    setTransactionData({ ...transactionData, category: name })
  }
  
  return (
    <div className="mt-4">
      <Listbox value={select} onChange={handleChangeCategory} className="w-full">
        <div className=" w-full mt-1">
          <Listbox.Button className="w-full flex justify-between pr-3 cursor-default rounded-lg bg-gray-200 py-2 pl-3 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="flex truncate">{select.name}</span>
            <span className=" flex pointer-events-none  inset-y-0 right-0 items-center">
              <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className=" mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    ` cursor-default select-none py-2 flex pl-10 pr-4 ${
                      active ? 'bg-[#6EE7B7] flex text-[#1E293B]' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ select }) => (
                    <>
                      <span
                        className={`block truncate ${select ? 'font-medium' : 'font-normal'}`}
                      >
                        {person.name}
                      </span>
                      {select ? (
                        <span className=" inset-y-0 left-0 flex items-center pl-3 text-[#1E293B]">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
