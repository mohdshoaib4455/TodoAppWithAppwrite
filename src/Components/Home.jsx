import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../store/Context";
import { MdDeleteForever } from "react-icons/md";
const Home = () => {
  const { user, AddTodo, getTodos, deleteTodo } = useContext(AuthContext);
  const [titile, settitle] = useState("");
  const [tudos, setTodos] = useState([]);
  useEffect(() => {
    const fetchedTodos = async () => {
      const totalTodos = await getTodos();
      setTodos(totalTodos);
    };
    fetchedTodos();
  }, []);
  const addTodo = async (e) => {
    e.preventDefault();
    if (!titile.trim()) {
      alert("Please add your todo");
      return;
    }
    const newTodo = await AddTodo(titile);
    setTodos((prev) => [...prev, newTodo]);
    settitle("");
  };
  const DeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todos) => todos.$id !== id));
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col items-center  h-auto py-9">
          <h1 className="text-xl uppercase md:text-3xl lg:text-4xl font-bold text-center text-black">
            WELCOME, {user && user.name}
          </h1>
        </div>
        <div className="w-full h-auto flex justify-center py-6">
          <div className=" bg-white w-sm sm:w-xl md:w-2xl   px-3 py-3 border-black border-2 rounded-sm">
            <form
              onSubmit={addTodo}
              className="w-full flex-col   justify-between border-b-1 gap-3 border-white py-3"
            >
              <input
                value={titile}
                onChange={(e) => settitle(e.target.value)}
                placeholder="Type here..."
                className="border-0 outline-1 px-3 py-2  text-md font-sans focus:outline-1  bg-white rounded w-full   "
                type="text"
              />
              <button className="bg-purple-400 text-white font-semibold cursor-pointer px-5 w-full py-2 rounded font-sans mt-5">
                ADD
              </button>
            </form>
            <ul className=" py-2 border-0 mt-4">
              {tudos.length === 0 && (
                <h2 className="uppercase text-center font-bold text-black">
                  Please add somthing
                </h2>
              )}
              {tudos.map((item) => (
                <li
                  key={item.$id}
                  className="py-2 mt-3 text-2xl border-b-1 border-b-black text-black font-semibold  font-sans flex justify-between"
                >
                  {item.title}
                  <button
                    onClick={() => DeleteTodo(item.$id)}
                    className="cursor-pointer"
                  >
                    <MdDeleteForever size={25} className="text-red-700" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
