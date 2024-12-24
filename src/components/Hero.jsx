import Header from "./header";

function Hero() {
  return (
    <section className="mb-32">
              <div className="w-full -z-10 relative top-0 flex justify-center items-center">
        <img src="/public/hero.png" className="absolute top-0" alt="" />
      </div>
      <Header />

      <div className="text-center lg:h-96 h-72 flex items-center justify-center">
        <h1 className="text-white text-3xl lg:text-5xl">
          <span className="text-[#ffc21c]">+20 SVGs</span> para copiares e
          colares no teu projecto, <br />
          de forma rápida e fácil.
        </h1>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap *:md:w-3/4 gap-y-5 *:h-72 px-5 *:p-5 justify-center items-center 2xl:px-32 lg:px-28">
        <div className="lg:h-52 bg-[#1b1b1b]  w-full rounded-l-lg p-5 flex flex-col justify-between">
          <h2 className="text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h2>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            sapiente ullam accusamus quasi tenetur doloremque doloribus minus
            totam provident sit facilis ab exercitationem perferendis beatae, a
            natus hic. Laudantium, ipsam?
          </p>
          <button className="self-start bg-[#ff9831] rounded-md p-2">Ver documentação</button>
        </div>
        <div className="lg:h-60 bg-blue-600 w-full justify-around flex-col flex p-5 rounded-r-lg rounded-t-lg">
            
            <h2 className="text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h2>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            sapiente ullam accusamus quasi tenetur doloremque doloribus minus
            totam provident sit facilis ab exercitationem perferendis beatae, a
            natus hic. Laudantium, ipsam?
          </p>
          <button className="self-start bg-[#ff9831] rounded-md p-2">Ver documentação</button>

            
        </div>
      </div>
    </section>
  );
}
export default Hero;
