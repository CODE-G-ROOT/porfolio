// ! ESTE CODIGO NO SIRVE ----- QUEDA PENDIENTE REVISION

const ShowData = ({ body, body_p_1, body_p_2 }) => {
  const handleClick = () => {
    console.log({
      body_p_1, body_p_2
    });
    
    return (
      <div className="w-11/12 text-brown flex justify-between items-center">
        <div className="flex flex-col gap-5">
          <p className="w-10/12">{body_p_1}</p>
          <p className="w-10/12">{body_p_2}</p>
        </div>
        <div id="arrow_click" onClick={handleClick}>
          <img src="/img/svg/arrow_down.svg" alt="Arrow" className="w-10" />
        </div>
      </div>
    );
  };

  return (
    <div className="w-11/12 text-brown flex justify-between items-center">
      <p className="w-10/12">{body}</p>
      <div id="arrow_click" onClick={handleClick}>
        <img src="/img/svg/Right-arrow.svg" alt="Arrow" className="w-10" />
      </div>
    </div>
  );
};

export default ShowData;
