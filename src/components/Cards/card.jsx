import React from "react";

const ShowData = ({ body }) => {
    const handleClick = () => {
        alert("click");
    };

    return (
        <div className="w-11/12 text-brown flex justify-between items-center">
            <p className="w-10/12">{body}</p>
            <div id="arrow_click" onClick={handleClick}>
                <img src="/img/Right-arrow.svg" alt="Arrow" className="w-10"/>
            </div>
        </div>
    );
};

export default ShowData;
