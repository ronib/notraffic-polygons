import React, { useEffect, useState } from 'react';
import { Stage, Layer, Line, Image as KonvaImage, Circle } from 'react-konva';
import type { Polygon } from '../common/interfaces';
import './CanvasContainer.css';
import { fetchPolygons, deletePolygon, createPolygon } from '../services/polygonService';
import { IMG_RANDOM_SRC } from '../common/constants';
import DeletePolygon from './DeletePolygon';

const CanvasContainer: React.FC = () => {
  const [currentPoints, setCurrentPoints] = useState<[number, number][]>([]);
  const [polygons, setPolygons] = useState<Polygon[]>([]);
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new window.Image();
    img.src = IMG_RANDOM_SRC;
    img.onload = () => setBgImage(img);
  }, []);

  useEffect(() => {
    const loadPolygons = async () => {
      try {
        const data = await fetchPolygons();
        setPolygons(data);
      } catch (error) {
        console.error('Error loading polygons:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPolygons();
  }, []);

  const handleClick = (e: any) => {
    const stage = e.target.getStage();
    const pointer = stage.getPointerPosition();
    if (pointer) {
      setCurrentPoints([...currentPoints, [pointer.x, pointer.y]]);
    }
  };

  const handleCreate = async () => {
    if (currentPoints.length >= 3) {
      const newPolygon: Polygon = {
        id: Date.now(),
        name: `Polygon ${polygons.length + 1}`,
        points: currentPoints,
      };
      setPolygons([...polygons, newPolygon]);
      setCurrentPoints([]);
      await createPolygon(newPolygon);

    }
  };

  const handleClear = () => {
    setCurrentPoints([]);
    setPolygons([]);
  };

  const handleDelete = async (id: number) => {
    await deletePolygon(id);
    setPolygons(polygons.filter(p => p.id !== id));
  };

  return (
    <div>
      <div className='row-buttons'>
        <button className="button" onClick={handleCreate}>Create</button>
        <button className="button" onClick={handleClear}>Clear</button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <Stage width={800}
          height={450}
          onClick={handleClick}
          className="stage-border"

        >
          <Layer>
            {bgImage && (
              <KonvaImage image={bgImage} width={800} height={450} />
            )}

            {currentPoints.length > 0 && (
              <Circle
                x={currentPoints[0][0]}
                y={currentPoints[0][1]}
                radius={5}
                fill="blue"
              />
            )}

            {/* Current drawing */}
            {currentPoints.length > 0 && (
              <Line
                points={currentPoints.flat()}
                closed={false}
                stroke="grey"
                strokeWidth={2}
              />
            )}

            {/* Existing polygons */}
            {polygons.map((polygon) => (
              <React.Fragment key={polygon.id}>
                <Line

                  points={polygon.points.flat()}
                  closed
                  fill="blue"
                  stroke="white"
                  strokeWidth={2}
                />
                <DeletePolygon x={polygon.points[0][0]} y={polygon.points[0][1]} onClick={() => handleDelete(polygon.id)} />

              </React.Fragment>

            ))}
          </Layer>
        </Stage>
      )}


    </div>
  );
};

export default CanvasContainer;
