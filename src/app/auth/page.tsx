"use client";

import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="flex justify-center items-center w-full h-full">
      <div className="w-72 h-40 bg-slate-500 rounded-md p-4">
        {isLogin ? <Login /> : <Register />}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register" : "Login"}
        </button>
      </div>
    </main>
  );
};

export default AuthPage;
