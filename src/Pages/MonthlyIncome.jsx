import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setMoney } from '../Redux/slices/initialMoney'

export const ModalMonthlyIncome = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [value, setValue] = useState(0)
  const dispatch = useDispatch()

  function closeModal() {
    dispatch(setMoney(value))
  }

  function openModal() {
    setIsOpen(true)
  }

  function sendIncome({target: {value}}) {
    setValue(value)
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-[#6EE7B7] px-4 py-4 font-medium text-[#1E293B] hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Adicionar Renda mensal
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h2"
                    className="text-xl font-medium leading-6 text-[#1E293B]"
                  >
                    Adicionar renda mensal
                  </Dialog.Title>
                  <div className="mt-2">
                    <input
                      onChange={sendIncome}
                      value={value}
                      type="number"
                      placeholder="Ex: R$ 2,000.00"
                      className=" outline-none p-1 focus:border-[#1E293B] text-lg border-b-2 w-full"
                    />
                  </div>

                  <div className="mt-4">
                    <NavLink
                      to={'/transactions/home'}
                      className="inline-flex justify-center disabled:brightness-75 rounded-md border border-transparent bg-[#6EE7B7] px-4 py-2 text-sm font-medium text-[#1E293B] hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Vamos lá
                    </NavLink>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
