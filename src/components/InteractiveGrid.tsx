import React, { useEffect, useRef } from 'react';

const InteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    let mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };
    let isMouseIn = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
      isMouseIn = true;
    };

    const handleMouseLeave = () => {
      isMouseIn = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const gridSize = 60;
    const maxDist = 180;

    const render = () => {
      // Smooth mouse follow
      mouse.x += (mouse.tx - mouse.x) * 0.1;
      mouse.y += (mouse.ty - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;

      // Ensure we draw standard grid, but displace points that are close to mouse
      ctx.beginPath();
      
      // Draw vertical lines
      for (let x = 0; x <= width + gridSize; x += gridSize) {
        for (let y = 0; y <= height + gridSize; y += 10) { // Small steps for smooth bending
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          let nx = x;
          let ny = y;

          if (isMouseIn && dist < maxDist) {
            const force = Math.pow((maxDist - dist) / maxDist, 2);
            nx += (dx / dist) * force * 15; // push away
            ny += (dy / dist) * force * 15;
          }

          if (y === 0) ctx.moveTo(nx, ny);
          else ctx.lineTo(nx, ny);
        }
      }
      ctx.stroke();

      ctx.beginPath();
      // Draw horizontal lines
      for (let y = 0; y <= height + gridSize; y += gridSize) {
        for (let x = 0; x <= width + gridSize; x += 10) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          let nx = x;
          let ny = y;

          if (isMouseIn && dist < maxDist) {
            const force = Math.pow((maxDist - dist) / maxDist, 2);
            nx += (dx / dist) * force * 15; // push away
            ny += (dy / dist) * force * 15;
          }

          if (x === 0) ctx.moveTo(nx, ny);
          else ctx.lineTo(nx, ny);
        }
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

export default InteractiveGrid;
