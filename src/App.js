import React from "react";

const App = () => {
  return (
    <div className="relative h-screen">
      <Login />
      <img
        src="/Frame 2.png"
        alt={"Parrot"}
        className="absolute right-0 h-screen object-cover"
      />
    </div>
  );
};

const Login = () => {
  return (
    <section className="absolute left-20 top-1/2 -translate-y-1/2 w-1/4">
      <h1 className="text-8xl uppercase font-semibold text-[#101A1CD6] mb-10">
        Login
      </h1>
      <div className="flex flex-col gap-8">
        <input
          type="text"
          placeholder="Username"
          className="border-[1px] border-black/25 py-2 px-2 rounded-md text-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-[1px] border-black/25 py-2 px-2 rounded-md text-lg"
        />
      </div>
      <button className="uppercase bg-[#101A1C] text-white py-3 px-2 rounded-lg w-2/5 my-7 text-lg font-semibold">
        Login
      </button>
      <div className="flex items-center">
        <hr className="flex-grow border-[1px] border-black/25" />
        <span className="uppercase px-2 font-semibold">or</span>
        <hr className="flex-grow border-[1px] border-black/25" />
      </div>
      <div className="flex justify-around w-1/2 mx-auto my-7">
        <a href="#" className="">
          <img src="/image 1.png" alt="google link" />
        </a>
        <a href="#" className="">
          <img src="/image 2.png" alt="facebook link" />
        </a>
      </div>
      <p className="font-semibold text-center">
        Not registered yet? Click{" "}
        <a href="#" className="underline text-blue-400">
          here
        </a>{" "}
        to sign up
      </p>
    </section>
  );
};

export default App;
