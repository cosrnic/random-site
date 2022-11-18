import { useState } from "react";

function Biscuits() {
    const [visible, setVisible] = useState(true);

    return (
        <div
            className={
                visible
                    ? `bottom-0 fixed p-4 m-2 bg-black/20 ring-2 ring-main/40 rounded-md right-0 max-w-[18rem] font-mono`
                    : `[display:none]`
            }
        >
            <div
                className=" top-0 right-0 float-right rounded-full cursor-pointer"
                onClick={() => setVisible(!visible)}
            >
                x
            </div>
            <h1 className="text-xl font-bold text-main">We use Biscuits</h1>
            <p className="text-main/70">
                What are Biscuits? Nothing, and I mean nothing.
            </p>
        </div>
    );
}

export default Biscuits;
