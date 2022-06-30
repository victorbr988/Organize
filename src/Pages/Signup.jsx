import { Form } from '../components/Form'
export const Signup = () => {
  return (
    <div className="background h-screen">
      <div className="bg-black/30 h-full flex flex-col justify-between">
        <header className="flex">
          <h2 className="text-3xl text-white w-screen h-40 flex items-end justify-center">Organize</h2>
        </header>
        <main className="flex items-end">
          <Form />
        </main>
      </div>
    </div>
  );
};
