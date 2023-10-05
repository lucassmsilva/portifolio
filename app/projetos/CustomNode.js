import { useCallback, useState } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";

const handleStyle = {
  backgroundColor: "#0ea5e9",
};

export function CustomNode({ data }) {
  const [handles, setHandles] = useState([]);

  const updateNodeInternals = useUpdateNodeInternals();
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  function addHandle() {
    setHandles((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        style: { ...handleStyle, top: 20 * (prevState.length + 1) },
      },
    ]);
    updateNodeInternals("3");
  }

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="w-full flex flex-col gap-2  p-2 bg-slate-500">
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />

        <div className="w-full ">
          <button type="button" className="bg-lime-500 p-2" onClick={addHandle}>
            ADICIONAR handle
          </button>
          {handles.map((h) => {
            return (
              <Handle
                key={`a${h.id}`}
                type="source"
                position={Position.Right}
                id={`a${h.id}`}
                style={h.style}
              />
            );
          })}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      />
    </>
  );
}
