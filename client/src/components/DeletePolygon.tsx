import React from 'react';
import { Text } from 'react-konva';

interface Props {
  x: number;
  y: number;
  onClick: () => void;
}

const DeletePolygon: React.FC<Props> = ({ x, y, onClick }) => (
  <Text
    key={`delete-${x}-${y}`}
    text="X"
    x={x}
    y={y}
    fontSize={14}
    fill="red"
    onClick={onClick}
    onMouseOver={e => {
      const stage = e.target.getStage();
      if (stage) stage.container().style.cursor = 'pointer';
    }}
    onMouseOut={e => {
      const stage = e.target.getStage();
      if (stage) stage.container().style.cursor = 'default';
    }}
  />
);

export default DeletePolygon;









