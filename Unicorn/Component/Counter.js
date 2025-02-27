"use client";
import { useState } from 'react';

function Counter({ title }) {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="flex gap-4 items-center">
                <button onClick={() => setCount((prev) => prev > 0 ? prev - 1 : 0)}
                    className='btn btn-circle btn-outline'
                >
                    -
                </button>
                <span className='text-2xl font-mono min-w-[3ch] text-center'>
                    {count}
                </span>
                <button onClick={() => setCount((prev) => prev + 1)}
                    className='btn btn-circle btn-outline'
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Counter;

