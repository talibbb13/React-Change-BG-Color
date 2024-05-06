import { useState } from "react";
// import Product from '../Components/Example'

function App() {
  const [bgColor, setBgColor] = useState("bg-zinc-800");
  const btnDets = [
    { red: "bg-red-800" },
    { green: "bg-green-800" },
    { blue: "bg-blue-800" },
    { orange: "bg-orange-800" },
    { yellow: "bg-yellow-800" },
    { pink: "bg-pink-800" },
    { purple: "bg-purple-800" },
    { cyan: "bg-cyan-800" },
    { rose: "bg-rose-800" },
    { zinc: "bg-zinc-800" },
  ];

  return (
    <>
      {/* <Product quantity={{ min: 5, max: 15 }} price = {2700} /> */}
      <div className={`h-screen w-full ${bgColor}`}>
        <h1 className="font-bold text-3xl p-3 text-center">Hello, Change my Color 😃</h1>

        <div className="w-full absolute bottom-7 left-0 flex justify-center">
          <div className="h-[6vh] w-11/12 border flex justify-center items-center gap-3 bg-zinc-200 rounded-full">
            {btnDets.map((colorObj, ind) => {
              const colorName = Object.keys(colorObj)[0];
              const bgClass = colorObj[colorName];

              return (
                <button
                  onClick={() => { setBgColor(bgClass);}}
                  key={ind}
                  className={`${bgClass} px-3 py-1 rounded-full font-semibold text-xs`}
                >
                  {colorName}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
