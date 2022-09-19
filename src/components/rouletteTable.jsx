import React, { useState } from "react";
import { useEffect } from "react";

import RouletteButton from "./rouletteButton";

const BOARD_LENGTH = 12;
const BOARD_BREADTH = 3;
const BOARD_ELEMENTS = Array(BOARD_LENGTH)
    .fill(0)
    .map((x) => Array(BOARD_BREADTH).fill(0));
for (let i = 0; i < BOARD_LENGTH; i++) {
    for (let j = 0; j < BOARD_BREADTH; j++) {
        BOARD_ELEMENTS[i][j] = i * BOARD_BREADTH + j + 1;
    }
}
const BLACK_ELEMENTS = [
    2, 4, 6, 8, 11, 10, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
];

export default function RouletteTable() {
    const [selectedPositions, setSelectedPositions] = useState([]);

    const play = () => {
        console.log(selectedPositions);
    };

    const handleFirstRowElements = () => {
        const _firstRowElements = Array(12)
            .fill(0)
            .map((x, i) => i * 3 + 1);
        // console.log(_firstRowElements)
        setSelectedPositions(_firstRowElements);
    };
    const handleSecondRowElements = () => {
        const _secondRowElements = Array(12)
            .fill(0)
            .map((x, i) => i * 3 + 2);
        // console.log(_secondRowElements)
        setSelectedPositions(_secondRowElements);
    };
    const handleThirdRowElements = () => {
        const _thirdRowElements = Array(12)
            .fill(0)
            .map((x, i) => i * 3 + 3);
        // console.log(_thirdRowElements)
        setSelectedPositions(_thirdRowElements);
    };

    const handle1st12 = () => {
        const _firstTwelve = Array(12)
            .fill(0)
            .map((x, i) => i + 1);
        // console.log(_firstTwelve)
        setSelectedPositions(_firstTwelve);
    };

    const handle2nd12 = () => {
        const _secondTwelve = Array(12)
            .fill(0)
            .map((x, i) => i + 13);
        // console.log(_secondTwelve)
        setSelectedPositions(_secondTwelve);
    };

    const handle3rd12 = () => {
        const _thirdTwelve = Array(12)
            .fill(0)
            .map((x, i) => i + 25);
        // console.log(_thirdTwelve)
        setSelectedPositions(_thirdTwelve);
    };

    const handle1to18 = () => {
        const _1to18 = Array(18)
            .fill(0)
            .map((x, i) => i + 1);
        // console.log(_1to18)
        setSelectedPositions(_1to18);
    };

    const handle19to36 = () => {
        const _19to36 = Array(18)
            .fill(0)
            .map((x, i) => i + 18 + 1);
        // console.log(_19to36)
        setSelectedPositions(_19to36);
    };

    const handleEven = () => {
        const _even = Array(18)
            .fill(0)
            .map((x, i) => i * 2 + 2);
        // console.log(_even)
        setSelectedPositions(_even);
    };

    const handleOdd = () => {
        const _odd = Array(18)
            .fill(0)
            .map((x, i) => i * 2 + 1);
        // console.log(_odd)
        setSelectedPositions(_odd);
    };

    const handleBlack = () => {
        // console.log(BLACK_ELEMENTS)
        setSelectedPositions(BLACK_ELEMENTS);
    };

    const handleRed = () => {
        const _redPositions = Array(36)
            .fill(0)
            .map((x, i) => i + 1)
            .filter((x) => !BLACK_ELEMENTS.includes(x));
        console.log(_redPositions);
        setSelectedPositions(_redPositions);
    };

    const reset = () => {
        setSelectedPositions([]);
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <div className="box-border border-2 flex flex-row   items-center ">
                <div className=" flex flex-row ">
                    <div className="grid gap-1 grid-cols-1">
                        <div className="box-content border-slate-500  bg-slate-400 p-2 ">
                            <div>
                                <RouletteButton
                                    key={0}
                                    id={0}
                                    selectedPositions={selectedPositions}
                                    setSelectedPositions={setSelectedPositions}
                                ></RouletteButton>
                            </div>
                        </div>
                    </div>{" "}
                </div>
                <div className=" flex flex-row ">
                    <div className=" box-border h-70  p-2 border-2  ">
                        <div className="grid grid-cols-12 gap-1">
                            {BOARD_ELEMENTS.map((item, i) => (
                                <div key={item}>
                                    {item.map((i) => (
                                        // <div key={i} className={ "rounded-full   text-center bg-red-600 " } >
                                        <RouletteButton
                                            key={i}
                                            id={i}
                                            selectedPositions={
                                                selectedPositions
                                            }
                                            setSelectedPositions={
                                                setSelectedPositions
                                            }
                                        ></RouletteButton>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className=" flex flex-row ">
                    <div className=" box-border h-70  p-2 border-2  ">
                        <div className="grid gap-2 grid-cols-1">
                            <div className="box-boder  text-center p-2 border-slate-500 bg-cyan-900 ">
                                <button onClick={handleFirstRowElements}>
                                    <div>
                                        <h1 className="text-sm  p-2 text-white">
                                            1st
                                        </h1>
                                    </div>
                                </button>
                            </div>
                            <div className="box-boder  text-center p-2 border-slate-500 bg-cyan-900 ">
                                <button onClick={handleSecondRowElements}>
                                    <div>
                                        <h1 className="text-sm  p-2 text-white">
                                            2nd
                                        </h1>
                                    </div>
                                </button>
                            </div>
                            <div className="box-boder  text-center p-2 border-slate-500 bg-cyan-900 ">
                                <div>
                                    <button onClick={handleThirdRowElements}>
                                        <h1 className="text-sm  p-2 text-white">
                                            3rd
                                        </h1>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className=" p-2 border-2  box-content w-full  ">
                    <div className="grid gap-5 grid-cols-3 ">
                        <button onClick={handle1st12}>
                            <div className="box-boder  p-2 border-slate-500 bg-cyan-900 text-center ">
                                <h1 className="text-sm p-2 text-white ">
                                    1st 12{" "}
                                </h1>{" "}
                            </div>
                        </button>

                        <button onClick={handle2nd12}>
                            <div className="box-boder  p-2 border-slate-500 bg-cyan-900  text-center ">
                                <h1 className="text-sm p-2 text-white">
                                    {" "}
                                    2nd 12{" "}
                                </h1>{" "}
                            </div>
                        </button>
                        <button onClick={handle3rd12}>
                            <div className="box-boder  p-2 border-slate-500 bg-cyan-900  text-center ">
                                <h1 className="text-sm p-2 text-white">
                                    {" "}
                                    3rd 12{" "}
                                </h1>{" "}
                            </div>
                        </button>
                        <div className="grid  grid-cols-2 gap-2">
                            <button onClick={handle1to18}>
                                <div className="box-boder  p-2 border-slate-500 bg-cyan-900  text-center  ">
                                    <h1 className="text-sm p-2 text-white">
                                        {" "}
                                        1 to 18{" "}
                                    </h1>{" "}
                                </div>
                            </button>
                            <button onClick={handleEven}>
                                <div className="box-boder  p-2 border-slate-500 bg-cyan-900  text-center ">
                                    <h1 className="text-sm p-2 text-white">
                                        {" "}
                                        EVEN{" "}
                                    </h1>{" "}
                                </div>
                            </button>
                        </div>
                        <div className="grid  grid-cols-2 gap-2">
                            <button onClick={handleRed}>
                                <div className="box-boder  p-2 border-slate-500 bg-cyan-900  text-center ">
                                    <div className="box-border bg-red-600 ">
                                        <h1 className="text-sm p-2 text-white">
                                            Red{" "}
                                        </h1>{" "}
                                    </div>
                                </div>
                            </button>
                            <button onClick={handleBlack}>
                                <div className="box-boder  p-2 border-slate-500 bg-cyan-900  text-center ">
                                    <div className="box-border  bg-black ">
                                        <h1 className="text-sm p-2 text-white">
                                            {" "}
                                            BLACK{" "}
                                        </h1>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="grid  grid-cols-2 gap-2">
                            <button onClick={handleOdd}>
                                <div className="box-boder  p-2 border-slate-500 bg-cyan-900  text-center ">
                                    <h1 className="text-sm p-2 text-white">
                                        {" "}
                                        ODD
                                    </h1>{" "}
                                </div>
                            </button>
                            <button onClick={handle19to36}>
                                <div className="box-boder  p-2 border-slate-500 bg-cyan-900  text-center ">
                                    <h1 className="text-sm p-2 text-white">
                                        {" "}
                                        19 to 36
                                    </h1>{" "}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>{" "}
            </div>
            <button onClick={play}>
                <div className="box-boder mt-3  p-2 border-slate-500 bg-green-700  text-center ">
                    <h1 className="text-sm p-2 text-white">PLAY</h1>{" "}
                </div>
            </button>
            <button onClick={reset}>
                <div className="box-boder  p-2 mt-3 border-slate-500 bg-yellow-700  text-center ">
                    <h1 className="text-sm p-2 text-white">RESET</h1>{" "}
                </div>
            </button>
        </div>
    );
}
