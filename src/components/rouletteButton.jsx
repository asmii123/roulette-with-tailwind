import React from "react";


export default function RouletteButton(id,number,color,setColor,selectedStatus){

    const handleIndividualSelection = () => {
        selectedStatus=true;
      };




    return(
        // <div>
            <button
                      className="text-center"
                      id={id}
                      onClick={handleIndividualSelection}
                      color={selectedStatus==true? 'amber-300':'cyan-900'}
                    >
                      <h1 className="text-3xl p-2 text-white">{number}</h1>
                    </button>

        // </div>
    )
}