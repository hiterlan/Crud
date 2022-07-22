import ilustration from "./Assets/man.png";

export function MainContent() {
  return (
    <>
      <div className="w-3/5 bg-ciane-500 h-[460px] mx-auto mt-6 rounded-t-3xl flex items-center">
        <div className="font-['Kadwa'] font-bold ">
          <p className="text-3xl  text-white align-middle pt-6 ml-8">
            Bem vindo ao CRUD
          </p>
          <p className="text-yel-300 align-middle mt-5 ml-8 text-2xl">
            O que deseja fazer?
          </p>
        </div>
        <div>
          <img className="object-scale-down ml-8" src={ilustration} />
        </div>
      </div>
      <footer className="w-3/5 bg-[#1C1C1C] h-24 m-auto rounded-b-3xl focus:outline-none ">
        <figure className="relative bottom-5 circle w-10 h-10 rounded-full bg-yel-300 m-auto" />
        <p className="text-center text-yel-300 font-['K2D']">Criado por</p>

        <a
          href="https://github.com/hiterlan"
          className="text-center text-yel-300 font-['K2D'] mb-4 underline-none block focus:outline-none focus:text-white"
        >
          Hiterlan Salvador
        </a>
      </footer>
    </>
  );
}
