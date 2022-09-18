import React, { useState } from "react";
import { useEffect } from "react";

export default function RouletteTable() {
  const [selected, setSelected] = React.useState([]);
  const [color, setColor] = React.useState("cyan-900");
  const [individualArray, setIndividualArray] = React.useState("");
  //   const numbers = [
  //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //     22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  //   ];

  const numbers = [
    { id: 1, num: 1, color: color },
    { id: 2, num: 2, color: color },
    { id: 3, num: 3, color: color },
    { id: 4, num: 4, color: color },
    { id: 5, num: 5, color: color },
    { id: 6, num: 6, color: color },
    { id: 7, num: 7, color: color },
    { id: 8, num: 8, color: color },
    { id: 9, num: 9, color: color },
    { id: 10, num: 10, color: color },
    { id: 11, num: 11, color: color },
    { id: 12, num: 12, color: color },
    { id: 13, num: 13, color: color },
    { id: 14, num: 14, color: color },
    { id: 15, num: 15, color: color },
    { id: 16, num: 16, color: color },
    { id: 17, num: 17, color: color },
    { id: 18, num: 18, color: color },
    { id: 19, num: 19, color: color },
    { id: 20, num: 20, color: color },
    { id: 21, num: 21, color: color },
    { id: 22, num: 22, color: color },
    { id: 23, num: 23, color: color },
    { id: 24, num: 24, color: color },
    { id: 25, num: 25, color: color },
    { id: 26, num: 26, color: color },
    { id: 27, num: 27, color: color },
    { id: 28, num: 28, color: color },
    { id: 29, num: 29, color: color },
    { id: 30, num: 30, color: color },
    { id: 31, num: 31, color: color },
    { id: 32, num: 32, color: color },
    { id: 33, num: 33, color: color },
    { id: 34, num: 34, color: color },
    { id: 35, num: 35, color: color },
    { id: 36, num: 36, color: color },
  ];

  const endBox = ["1st", "2nd", "3rd"];

  const red = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];

  const black = [
    2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
  ];

  //   const handleIndividualColor = (item) => {

  //     if(selected.includes(item)){
  //             setColor('cyan-900')
  //     }
  //     else
  //     setColor('amber-900')
  //   }

  const handleIndividualSelection = (item) => {
    console.log("passed item", item);

    if (selected.includes(item.id)) {
      return setSelected((items) => items.filter((el) => el !== item.id));
    } else {
      selected.push(item.num);
    }

    toggleColor();
  };

  const toggleColor = (item) => {
    if (color === "cyan-900") {
      setColor("amber-300");
    } else if (color === "amber-300") {
      setColor("cyan-900");
      //   setSelected([]);
    }

    // if(selected.includes(item))
  };

  const handle1st12 = (e) => {
    let f12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    setSelected(f12);
    toggleColor();
  };

  const handle2nd12 = (e) => {
    setSelected([13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
    toggleColor();
  };
  const handle3rd12 = (e) => {
    setSelected([25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
    toggleColor();
  };

  const handle1to18 = (e) => {
    setSelected([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ]);
    toggleColor();
  };
  const handleEven = (e) => {
    setSelected([
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
    ]);
    toggleColor();
  };
  const handleRed = (e) => {
    setSelected(red);
    toggleColor();
  };
  const handleBlack = (e) => {
    setSelected(black);
    toggleColor();
  };
  const handleOdd = (e) => {
    setSelected([
      1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35,
    ]);
    toggleColor();
  };
  const handle19to36 = (e) => {
    setSelected([
      19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    ]);

    toggleColor();
  };

  useEffect(() => {
    console.log("HELOO");
    //    handleIndividualSelection();
    // selected.push(individualArray.num);
    console.log("selected arraaaayy", selected);
    toggleColor();
  }, [selected]);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="box-border border-4 flex flex-row   items-center ">
        <div className=" flex flex-row ">
          <div className="grid gap-2 grid-cols-1">
            <div className="box-content border-slate-500  bg-slate-400 p-4 ">
              <div>
                <h1 className="text-3xl p-2 text-amber-300">0</h1>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className=" flex flex-row ">
          <div className=" box-border h-70  p-4 border-4  ">
            <div className="grid grid-cols-12 gap-2">
              {numbers.map((item) => (
                <div
                  className={
                    selected.includes(item.num)
                      ? `box-boder  p-4 border-slate-500 bg-${item.color}`
                      : `box-boder  p-4  border-slate-500 bg-cyan-900`
                  }
                >
                  <div
                    className={
                      red.includes(item.num)
                        ? "rounded-full   text-center bg-red-600 "
                        : "rounded-full   text-center bg-black "
                    }
                  >
                    <button
                      className="text-center"
                      key={item.id}
                      onClick={() => handleIndividualSelection(item)}
                    >
                      <h1 className="text-3xl p-2 text-white">{item.num}</h1>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" flex flex-row ">
          <div className=" box-border h-70  p-4 border-4  ">
            <div className="grid gap-2 grid-cols-1">
              {endBox.map((item) => (
                <div className="box-boder  text-center p-4 border-slate-500 bg-cyan-900 ">
                  <div>
                    <h1 className="text-3xl  p-2 text-white">{item}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className=" p-4 border-4  box-content w-full  ">
          <div className="grid gap-5 grid-cols-3 ">
            <button onClick={handle1st12}>
              <div className="box-boder  p-4 border-slate-500 bg-cyan-900 text-center ">
                <h1 className="text-3xl p-2 text-white ">1st 12 </h1>{" "}
              </div>
            </button>

            <button onClick={handle2nd12}>
              <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
                <h1 className="text-3xl p-2 text-white"> 2nd 12 </h1>{" "}
              </div>
            </button>
            <button onClick={handle3rd12}>
              <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
                <h1 className="text-3xl p-2 text-white"> 3rd 12 </h1>{" "}
              </div>
            </button>
            <div className="grid  grid-cols-2 gap-2">
              <button onClick={handle1to18}>
                <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center  ">
                  <h1 className="text-3xl p-2 text-white"> 1 to 18 </h1>{" "}
                </div>
              </button>
              <button onClick={handleEven}>
                <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
                  <h1 className="text-3xl p-2 text-white"> EVEN </h1>{" "}
                </div>
              </button>
            </div>
            <div className="grid  grid-cols-2 gap-2">
              <button onClick={handleRed}>
                <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
                  <div className="box-border bg-red-600 ">
                    <h1 className="text-3xl p-2 text-white">Red </h1>{" "}
                  </div>
                </div>
              </button>
              <button onClick={handleBlack}>
                <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
                  <div className="box-border  bg-black ">
                    <h1 className="text-3xl p-2 text-white"> BLACK </h1>
                  </div>
                </div>
              </button>
            </div>
            <div className="grid  grid-cols-2 gap-2">
              <button onClick={handleOdd}>
                <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
                  <h1 className="text-3xl p-2 text-white"> ODD</h1>{" "}
                </div>
              </button>
              <button onClick={handle19to36}>
                <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
                  <h1 className="text-3xl p-2 text-white"> 19 to 36</h1>{" "}
                </div>
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
