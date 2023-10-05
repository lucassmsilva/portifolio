"use client";
import { useState, useCallback, useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { CustomNode } from "./CustomNode";

const initialNodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 50, y: 50 },
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    type: "customNode",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
];

// const initialEdges = [{ id: '1-2', source: '1', target: '2', label: 'to the' }];
const initialEdges = [];

function Flow() {
  const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

const Projetos = () => {
  return (
    <div className="w-full h-full flex flex-1 justify-center items-center bg-gray-700">
      <div
        style={{
          width: 800,
          height: 800,
        }}
      >
        <Flow></Flow>
      </div>
    </div>
  );
};

export default Projetos;
