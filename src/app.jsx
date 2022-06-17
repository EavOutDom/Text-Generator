import React, { useState } from "react";
import text from "./data";
// console.log(text);
const App = () => {
    const [count, setCount] = useState(0);
    const [texts, setTexts] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        console.log(text.length);
        if(amount <= 0){
          amount = 1;
        }
        if(amount > 9){
          amount = 9;
        }
        setTexts(text.slice(0, amount));
    };
    return (
        <div className={"text-center my-6"}>
            <h2 className={"text-3xl font-semibold my-2"}>Lorem Ipsum</h2>
            <div className={"h-1 w-44 bg-white mx-auto"}></div>
            <form
                className="text-center my-8 flex justify-center items-center"
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor={"amount"} className={"text-semibold mx-1"}>
                        Paragraphs:{" "}
                    </label>
                    <input
                        type={"number"}
                        name={"amount"}
                        id={"amount"}
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                        className={
                            "p-2 border border-gray-400 rounded-lg w-40 max-w-56"
                        }
                    />
                    <button
                        type={"submit"}
                        className={
                            "mx-1 bg-green-400 p-2 rounded-md text-white"
                        }
                    >
                        Generate
                    </button>
                </div>
            </form>
            <article>
                {texts.map((item, index) => {
                    return <p key={index}>{item}</p>;
                })}
            </article>
        </div>
    );
};

export default App;
