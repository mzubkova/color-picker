import React, { useReducer } from "react";

const rgbToHex = (rgb) => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return "" + hex;
};

const hexString = (r, g, b) => {
  return "#" + rgbToHex(r) + "" + rgbToHex(g) + rgbToHex(b);
};

const initialState = {
  red: "101",
  green: "157",
  blue: "189",
};

function reducer(state, action) {
  switch (action.type) {
    case "red":
      return { ...state, red: action.value };
    case "blue":
      return { ...state, blue: action.value };
    case "green":
      return { ...state, green: action.value };
    case "reset":
      return {
        ...state,
        green: action.value,
      };
    default:
      return state;
  }
}

const ColorPicker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="boxColor">
        <input
          type="range"
          min="0"
          max="255"
          step="1"
          id="red"
          onChange={(e) => dispatch({ type: "red", value: e.target.value })}
          value={state.red}
        ></input>
        <input
          type="range"
          min="0"
          max="255"
          step="1"
          id="green"
          onChange={(e) =>
            dispatch({ type: "green", value: e.target.value })
          }
          value={state.green}
        ></input>
        <input
          type="range"
          min="0"
          max="255"
          step="1"
          id="blue"
          onChange={(e) =>
            dispatch({ type: "blue", value: e.target.value })
          }
          value={state.blue}
        ></input>
        <div
          className="displayColorPicker"
          style={{
            background: hexString(state.red, state.green, state.blue),
          }}
        ></div>
        <button
          className="buttonReset"
          onClick={(e) => dispatch({ type: "reset", value: e.target.value })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
