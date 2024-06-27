import React, { useEffect, useRef, ReactNode } from 'react';

interface ParticleCanvasProps {
  children: ReactNode;
}

const BackgroundCanvas: React.FC<ParticleCanvasProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    const particleCount = 100;
    const particles: Particle[] = [];
    const maxDistance = 100;
    const attractionDistance = 100;
    const attractionForce = 0.02;
    const originalSpeed = 1;
    const colors = ['#00b8ff', '#009bd6', '#00719c', '#00415a', '#505a74'];
    const mouse = { x: w / 2, y: h / 2 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      originalVx: number;
      originalVy: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() * 2 - 1) * originalSpeed;
        this.vy = (Math.random() * 2 - 1) * originalSpeed;
        this.size = Math.random() * 3 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.originalVx = this.vx;
        this.originalVy = this.vy;
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < attractionDistance) {
          const force = (attractionDistance - distance) * attractionForce;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force;
          this.vy += Math.sin(angle) * force;
        } else {
          this.vx = this.originalVx;
          this.vy = this.originalVy;
        }

        this.vx *= 1.01;
        this.vy *= 1.01;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x > w) this.x = 0;
        if (this.x < 0) this.x = w;
        if (this.y > h) this.y = 0;
        if (this.y < 0) this.y = h;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function connectParticles() {
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dist = distance(particles[i], particles[j]);
          if (dist < maxDistance) {
            const opacity = 1 - dist / maxDistance;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function distance(p1: Particle, p2: Particle): number {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    }

    const resizeCanvas = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      ctx.clearRect(0, 0, w, h);
    };

    canvas.width = w;
    canvas.height = h;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    animate();

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = w / 2;
      mouse.y = h / 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="absolute top-0 left-0 bg-[#1d1936] w-full h-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
  };

export default BackgroundCanvas;
