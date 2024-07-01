import React, { useEffect, useRef, ReactNode } from 'react';
import useViewportSize from '../../utils/useViewportSize';

interface BackgroundCanvasProps {
  children: ReactNode;
  particleCount?: number;
}

const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ children, particleCount = 300 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewportSize = useViewportSize();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    let particles: Particle[] = [];
    let mouse = { x: 0, y: 0 };
    let requestId: number;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() * 2 - 1) * 0.5;
        this.vy = (Math.random() * 2 - 1) * 0.5;
        this.size = Math.random() * 3 + 1;
        this.color = randomColor();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > canvas.width || this.x < 0) {
          this.vx = -this.vx;
        }

        if (this.y > canvas.height || this.y < 0) {
          this.vy = -this.vy;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      connect(particles: Particle[]) {
        particles.forEach((otherParticle) => {
          const dx = otherParticle.x - this.x;
          const dy = otherParticle.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const sizeFactor = 100 / (distance + 1);
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${sizeFactor * 0.2})`;
            ctx.stroke();

            if (this.size < 5) {
              this.size += 0.1;
            }
          }
        });
      }

      moveAwayFromMouse() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = 0.05;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force;
          this.vy += Math.sin(angle) * force;
        }
      }
    }

    const randomColor = () => {
      const colors = ['#00b8ff', '#009bd6', '#00719c', '#00415a', '#505a74'];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.moveAwayFromMouse();
        particle.draw();
        particle.connect(particles);
      });

      requestId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleResize = () => {
      cancelAnimationFrame(requestId);
      resizeCanvas();
      animate();
    };

    resizeCanvas();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestId);
    };
  }, [viewportSize, particleCount]);

  return (
    <div className="relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundCanvas;
