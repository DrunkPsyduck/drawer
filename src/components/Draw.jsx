import { useRef, useEffect } from "react";
const Draw = () => {
const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastPositionRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleMouseDown = (e) => {
      isDrawingRef.current = true;
      lastPositionRef.current = {
        x: e.pageX - canvas.offsetLeft,
        y: e.pageY - canvas.offsetTop,
      };
    };

    const handleMouseMove = (e) => {
      if (!isDrawingRef.current) return;

      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#037A68";
      ctx.globalAlpha = 1.5;

      const { x, y } = lastPositionRef.current;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
      ctx.stroke();

      lastPositionRef.current = {
        x: e.pageX - canvas.offsetLeft,
        y: e.pageY - canvas.offsetTop,
      };
    };

    const handleMouseUp = () => {
      isDrawingRef.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ position: "fixed", top: 100, left: 0 }}
        width={window.innerWidth}
        height={window.innerHeight}
      />
     
    </div>
  );
};

export default Draw;
