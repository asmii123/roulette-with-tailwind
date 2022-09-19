/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const BLACK_ELEMENTS = [
    2, 4, 6, 8, 11, 10, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
];

export default function RouletteButton({
    id,
    selectedPositions,
    setSelectedPositions,
}) {
    const [isSelected, setIsSelected] = useState(false);
    useEffect(() => {
        // console.log(selectedPositions)
        if (selectedPositions.indexOf(id) >= 0) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }, [selectedPositions]);

    const updateSelectedPosition = (e) => {
        const _selectedPosition = Number(e.target.id);
        const _selectedPositions = selectedPositions;
        const _index = _selectedPositions.indexOf(_selectedPosition);

        if (_index >= 0) {
            _selectedPositions.splice(_index, 1);
        } else {
            _selectedPositions.push(_selectedPosition);
        }
        setSelectedPositions(_selectedPositions);
        setIsSelected(!isSelected);
        // console.log(_selectedPositions);
    };

    return (
        <div
            className={
                isSelected
                    ? `box-boder  p-4 border-slate-500 bg-amber-300`
                    : `box-boder  p-4  border-slate-500 bg-cyan-900`
            }
        >
            <div
                className={
                    BLACK_ELEMENTS.includes(id)
                        ? "rounded-full   text-center bg-black "
                        : "rounded-full   text-center bg-red-600 "
                }
            >
                <button
                    id={id}
                    onClick={updateSelectedPosition}
                    color={isSelected ? "amber-300" : "cyan-900"}
                >
                    <h1 className="text-3xl p-2 text-white">{id}</h1>
                    {/* {id} */}
                </button>
            </div>
        </div>
    );
}
