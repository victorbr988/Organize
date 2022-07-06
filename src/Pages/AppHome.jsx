import { useState } from 'react';
import { Header } from '../components/Header';
import { TransactionsHome } from '../components/TransactionsHome';
import { UserName } from '../components/UserName';
import { ModalAddTransaction } from '../components/ModalAddTransaction'

export const AppHome = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAdd, setModalAdd] = useState(false)

  return (
    <div>
      <Header setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <main className='mt-5'>
        <UserName />
        <section>
          {(!modalOpen && !modalAdd) && <TransactionsHome setModalAdd={setModalAdd} modalAdd={modalAdd} />}
          {modalAdd && !modalOpen && <ModalAddTransaction setModalAdd={setModalAdd} modalAdd={modalAdd} />}
        </section>
       
      </main>
    </div>
  );
};
