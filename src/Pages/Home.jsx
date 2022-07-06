import { ButtonEnter } from '../components/ButtonEnter'
export const Home = () => {
  return (
    <div className="background sm:bg-none min-h-screen">
      <div className=" bg-black/50 min-h-screen">
        <header className="flex ">
          <h2 className="text-3xl text-white w-screen h-40 flex items-end justify-center">Organize</h2>
        </header>
        <main>
          <section className="h-96 flex items-end ">
            <p data-testid="apresentation" className="text-white font-bold text-2xl mx-3">
              Esse aplicativo foi criado com um único objetivo, praticidade.Visamos incentivar com
              que a organização financeira aconteça de maneira descomplicada e eficiente.
            </p>
          </section>

          <section className="flex items-center h-40">
            <ButtonEnter />
          </section>
        </main>
      </div>
    </div>
  );
};
