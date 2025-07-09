import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";
import { increment, decrement, reset } from "./counterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="max-w-md mx-auto mt-24 p-8 bg-white rounded-2xl shadow-xl text-center">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">Redux Counter</h1>
      <div className="text-6xl font-mono font-semibold text-gray-700 mb-6">
        {count}
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-200"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-200"
        >
          -
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
