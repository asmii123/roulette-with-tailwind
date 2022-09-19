import React, { useState } from "react";
import { useEffect } from "react";

import RouletteButton from "./rouletteButton";

export default function RouletteTable() {
  const [selected, setSelected] = React.useState([]);
  const [color, setColor] = React.useState("cyan-900");
  
  //   const numbers = [
  //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //     22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  //   ];

  const numbers = [
    { id: 1, num: 1, selectedState: false },
    { id: 2, num: 2, selectedState: false },
    { id: 3, num: 3, selectedState: false },
    { id: 4, num: 4, selectedState: false },
    { id: 5, num: 5, selectedState: false },
    { id: 6, num: 6, selectedState: false },
    { id: 7, num: 7, selectedState: false },
    { id: 8, num: 8, selectedState: false },
    { id: 9, num: 9, selectedState: false },
    { id: 10, num: 10, selectedState: false },
    { id: 11, num: 11, selectedState: false },
    { id: 12, num: 12, selectedState: false },
    { id: 13, num: 13, selectedState: false },
    { id: 14, num: 14, selectedState: false },
    { id: 15, num: 15, selectedState: false },
    { id: 16, num: 16, selectedState: false },
    { id: 17, num: 17, selectedState: false },
    { id: 18, num: 18, selectedState: false },
    { id: 19, num: 19, selectedState: false },
    { id: 20, num: 20, selectedState: false },
    { id: 21, num: 21, selectedState: false },
    { id: 22, num: 22, selectedState: false },
    { id: 23, num: 23, selectedState: false },
    { id: 24, num: 24, selectedState: false },
    { id: 25, num: 25, selectedState: false },
    { id: 26, num: 26, selectedState: false },
    { id: 27, num: 27, selectedState: false },
    { id: 28, num: 28, selectedState: false },
    { id: 29, num: 29, selectedState: false },
    { id: 30, num: 30, selectedState: false },
    { id: 31, num: 31, selectedState: false },
    { id: 32, num: 32, selectedState: false },
    { id: 33, num: 33, selectedState: false },
    { id: 34, num: 34, selectedState: false },
    { id: 35, num: 35, selectedState: false },
    { id: 36, num: 36, selectedState: false },
  ];

  const endBox = ["1st", "2nd", "3rd"];

  const red = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];

  const black = [
    2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
  ];

 

  const handleIndividualSelection = (item) => {
    console.log("passed item", item);
    item.selectedState=true;

    if (selected.includes(item.id)) {
      return setSelected((items) => items.filter((el) => el !== item.id));
    } else {
      selected.push(item.num);
    }

    // toggleColor();
    toggleIndvColor(item);
  };

  const toggleIndvColor = (item) => {
    console.log(selected, 'hello1312')
    selected.forEach(element => {
        setColor('cyan-300')
        
    });
  }

  const toggleColor = (item) => {
    if (color === "cyan-900") {
      setColor("cyan-300");
    } else if (color === "cyan-300") {
      setColor("cyan-900");
      //   setSelected([]);
    }

    // if(selected.includes(item))
  };

  const handle1st12 = (e) => {
    let f12 = [1, 2, 3,4, 13,14, 15,16, 25,26, 27,28]
    setSelected(f12);
    toggleColor(f12);
  };

  const handle2nd12 = (e) => {
    setSelected([5,6,7,8,17, 18, 19, 20,29, 30, 31, 32,]);
    toggleColor();
  };
  const handle3rd12 = (e) => {
    setSelected([9,10,11,12,21,22,23,24, 33, 34, 35, 36]);
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

    // selected.push(individualArray.num);
    console.log("selected arraaaayy", selected);
    // toggleIndvColor();
    toggleColor()
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
              {numbers.map((item,i) => (
                <div
                  className={
                    selected.includes(item.num)
                      ? `box-boder  p-4 border-slate-500 bg-${color}`
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
                      {/* <RouletteButton 
                      id={i+1}
                      number={item.num}
                      selectedStatus={item.selectedState}
                      color={color}
                      setColor={color}
                      /> */}
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
