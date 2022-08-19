import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f3 center">
        {
          "This scanner will detect faces in pictures. Paste a url to give it a try below."
        }
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-2">
          <input
            className="f5 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="f5 w-30 grow link ph3 pv2 dib white bg-navy"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
