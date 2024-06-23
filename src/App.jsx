import { useState } from "react";
import { convertDayAndDate } from "./utils";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      checked: false,
      priority: "🟢",
      content: "Belajar React",
      timestamp: convertDayAndDate(new Date()),
    },
  ]);

  const [filteredTodos, setFilteredTodos] = useState(todos);

  const [activeMenu, setActiveMenu] = useState(0);

  function handleSubmitTodo(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        checked: false,
        priority: e.target.priority.value,
        content: e.target.content.value,
        timestamp: convertDayAndDate(new Date()),
      },
    ]);
    e.target.reset();
  }

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center md:p-24 p-4">
        <img
          src="/bg-desktop-light.jpg"
          alt="bg"
          className="h-96 -z-10 absolute top-0 min-h-96 object-cover w-full"
        />
        <section className="max-w-[700px] mx-auto container">
          <div className="flex justify-between items-center">
            <h1 className="text-[3rem] text-white font-bold tracking-[1rem]">
              TODO
            </h1>
            <div className="group">
              <p className="text-3xl bg-white rounded-full size-10">🙍</p>
              <div className="hidden group-hover:block bg-white rounded absolute p-2 shadow-lg">
                <p>Muhamad Syauqi Fadhlika</p>
                <p>Fullstack Developer</p>
              </div>
            </div>
          </div>

          <form
            className="flex items-center rounded-lg bg-white gap-4 mt-6 px-4"
            onSubmit={handleSubmitTodo}
          >
            <label>priority:</label>
            <select name="priority" className="w-10 -ml-4">
              <option value="🟢">🟢 low</option>
              <option value="🟡">🟡 medium</option>
              <option value="🔴">🔴 high</option>
            </select>
            <input name="content" type="text" className="w-full p-4 border-x" />
            <input
              type="submit"
              className="bg-purple-500 rounded px-3 py-1 text-white cursor-pointer hover:bg-purple-400"
            />
          </form>

          <div className="mt-4 rounded-lg bg-white shadow-lg">
            <div className="flex justify-between items-center p-4 text-gray-400">
              <div className="flex gap-6">
                <button
                  className={`${activeMenu === 0 && "text-black"}`}
                  onClick={() => {
                    setFilteredTodos(todos);
                    setActiveMenu(0);
                  }}
                >
                  Show All
                </button>
                <button
                  className={`${activeMenu === 1 && "text-black"}`}
                  onClick={() => {
                    setFilteredTodos(todos.filter((todo) => !todo.checked));
                    setActiveMenu(1);
                  }}
                >
                  Hide Done
                </button>
              </div>
              <button
                onClick={() => {
                  setTodos([]);
                }}
                className="hover:text-black"
              >
                Delete All
              </button>
            </div>

            {filteredTodos.map((todo) => {
              return (
                <>
                  <div className="flex items-center gap-4 p-4 border-t group">
                    <input
                      type="checkbox"
                      className="size-6 accent-purple-500"
                      checked={todo.checked}
                      onClick={() => {
                        todo.checked = !todo.checked;
                        setTodos([...todos]);
                      }}
                    />
                    <p
                      type="text"
                      className={`${todo.checked && "line-through"}`}
                    >
                      {todo.content}
                    </p>
                    <p className="flex-1 text-right text-sm text-gray-400">
                      {todo.priority} {todo.timestamp}
                    </p>
                    <button
                      type="submit"
                      className="cursor-pointer invisible group-hover:visible font-bold"
                      onClick={() => {
                        setTodos(todos.filter((t) => t !== todo));
                      }}
                    >
                      ╳
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
