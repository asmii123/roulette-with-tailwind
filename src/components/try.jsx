// import React from "react";

// export default function RouletteTable() {
//   const numbers = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//     22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
//   ];

//   const endBox = ["1st", "2nd", "3rd"];

//   const red = [
//     1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
//   ];
// const handle1st12 = (e) => {
//     let f12 = [1, 2, 3,4, 13,14, 15,16, 25,26, 27,28]
//     setSelected(f12);
//     toggleColor();
//   };

//   const handle2nd12 = (e) => {
//     setSelected([5,6,7,8,17, 18, 19, 20,29, 30, 31, 32,]);
//     toggleColor();
//   };
//   const handle3rd12 = (e) => {
//     setSelected([9,10,11,12,21,22,23,24, 33, 34, 35, 36]);
//     toggleColor();
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div className="box-border border-4 flex flex-row  items-center ">
//         <div className=" flex flex-row bg-slate-500 ">
//           <div className=" box-border  border-slate-500 h-70  p-4 border-4  ">
//             <div className="grid gap-2 grid-cols-1">
//               {/* {endBox.map((item) => ( */}
//               <div className="box-boder  p-4 border-slate-500 ">
//                 <div>
//                   <h1 className="text-3xl p-2 text-amber-300">
//                     <button>0 </button>
//                   </h1>
//                 </div>
//               </div>
//               {/* ))} */}
//             </div>
//           </div>{" "}
//         </div>
//         <div className=" flex flex-row ">
//           <div className=" box-border h-70  p-4 border-4  ">
//             <div className="grid grid-cols-12 gap-2">
//               {numbers.map((item) => (
//                 <div className="box-boder  p-4 border-white bg-cyan-900 ">
//                   <div
//                     className={
//                       red.includes(item)
//                         ? "rounded-full   text-center bg-red-600 "
//                         : "rounded-full   text-center bg-black "
//                     }
//                   >
//                     <h1 className="text-3xl p-2 text-white">
//                       <button>{item} </button>
//                     </h1>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className=" flex flex-row ">
//           <div className=" box-border h-70  p-4 border-4  ">
//             <div className="grid gap-2 grid-cols-1">
//               {endBox.map((item) => (
//                 <div className="box-boder  p-4 border-slate-500 bg-cyan-900 ">
//                   <div>
//                     <h1 className="text-3xl p-2 text-white">
//                       <button>{item} </button>
//                     </h1>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>{" "}
//         </div>
//       </div>
//       <div className="flex flex-col ">
//         <div className=" p-4 border-4  box-content w-full  ">
//           <div className="grid gap-5 grid-cols-3 ">
//             <div className="box-boder  p-4 border-slate-500 bg-cyan-900 text-center ">
//               <button>
//                 <h1 className="text-3xl p-2 text-white ">1st 12 </h1>{" "}
//               </button>
//             </div>

//             <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
//               <button>
//                 <h1 className="text-3xl p-2 text-white"> 2nd 12 </h1>{" "}
//               </button>
//             </div>
//             <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
//               <button>
//                 <h1 className="text-3xl p-2 text-white"> 3rd 12 </h1>{" "}
//               </button>
//             </div>
//             <div className="grid grid-flow-row gap-2">
//             <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center  ">
//               <button>
//                 <h1 className="text-3xl p-2 text-white"> 1 to 8  </h1>{" "}
//               </button>
//             </div>
//             <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
//               <button>
//                 <h1 className="text-3xl p-2 text-white"> EVEN  </h1>{" "}
//               </button>
//             </div>
//             </div>
//             <div className="grid grid-flow-row gap-2">
//             <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
//               <button>
//                 <h1 className="text-3xl p-2 text-white">Red </h1>{" "}
//               </button>
//             </div>
//             <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
//               <button>
//                 <h1 className="text-3xl p-2 text-white">BLACK </h1>{" "}
//               </button>
//             </div>
//             </div>
//             <div className="grid grid-flow-row gap-2">
//             <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
//               <button>
//                 <h1 className="text-3xl p-2 text-white"> ODD</h1>{" "}
//               </button>
//             </div>
//             <div className="box-boder  p-4 border-slate-500 bg-cyan-900  text-center ">
//               <button>
//                 <h1 className="text-3xl p-2 text-white"> 19 to 36</h1>{" "}
//               </button>
//             </div>
//             </div>
//           </div>
//         </div>{" "}
//       </div>
//     </div>
//   );
// }


//<div className=" box-border h-70  p-4 border-4">
           
{/* <div className="rounded-full   text-center bg-red-600">
<h1 className="text-3xl p-2 text-white">0</h1>

</div>
</div> */}