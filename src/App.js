import React, { useState } from "react";

function App() {
  const [firstImage, setFirstImage] = useState(true)
  const [secondImage, setSecondImage] = useState(true)
  const [thirdImage, setThirdImage] = useState(true)
  const [fourthImage, setFourthImage] = useState(true)

  return (

    <div className='row mx-0 bg-dark'>
      <div className='col-3 border text-white pt-3 pl-3' style={{ "height": "100vh" }}>
        <div className='d-flex' style={{ "place-items": "center", "gap": "10px" }}>
          <input type='checkbox' value={firstImage} onClick={() => setFirstImage(!firstImage)} id="firstImage" />
          <label htmlFor="firstImage" >First Image</label>
        </div>
        <div className='d-flex' style={{ "place-items": "center", "gap": "10px" }}>
          <input type='checkbox' value={secondImage} onClick={() => setSecondImage(!secondImage)} id="secondImage" />
          <label htmlFor="secondImage">Second Image</label>
        </div>
        <div className='d-flex' style={{ "place-items": "center", "gap": "10px" }}>
          <input type='checkbox' value={thirdImage} onClick={() => setThirdImage(!thirdImage)} id="thirdImage" />
          <label htmlFor="thirdImage">Third Image</label>
        </div>
        <div className='d-flex' style={{ "place-items": "center", "gap": "10px" }}>
          <input type='checkbox' value={fourthImage} onClick={() => setFourthImage(!fourthImage)} id="fourthImage" />
          <label htmlFor="fourthImage">Fourth Image</label>
        </div>
        <div className="row">
          <div className="pb-3 justify-content-end d-flex col-3" style={{ "position": "absolute", "bottom": '0', "gap": "8px" }}>
            <button className="btn btn-light">Cancel</button>
            <button className="btn btn-primary ">Save Analysis</button>
          </div>
        </div>
      </div>
      <div className='col-9 p-5 m-5' style={{ "position": "relative", "width": "fit-content", "height": "fit-content" }}>
        <img height={500} width={500} src={require('./assets/1.png')} style={{ "position": "absolute" }} className={firstImage ? 'd-none' : null} />
        <img height={500} width={500} src={require('./assets/2.png')} style={{ "position": "absolute" }} className={secondImage ? 'd-none' : null} />
        <img height={500} width={500} src={require('./assets/3.png')} style={{ "position": "absolute" }} className={thirdImage ? 'd-none' : null} />
        <img height={500} width={500} src={require('./assets/4.png')} style={{ "position": "absolute" }} className={fourthImage ? 'd-none' : null} />
      </div>
    </div>
  );
}

export default App;
