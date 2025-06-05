import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particles configuration
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(50, Math.floor(window.innerWidth / 30));

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connectParticles = () => {
      if (!ctx) return;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 - (distance / 1500)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2]">
          <span className="block bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
            Kaftain
          </span>
          <span className="block mt-6 text-gray-900">Intelligent Kubernetes</span>
          <span className="block mt-2 bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent leading-snug">
            Auto-Scaling with Kafka
          </span>
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl text-gray-600">
          Kaftain seamlessly bridges Kafka metrics and Kubernetes scaling,
          delivering efficient and responsive auto-scaling for your consumer clusters.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#documentation"
            className="px-8 py-3 bg-blue-800 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1"
          >
            Get Started
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3 bg-white text-blue-800 border border-blue-800 font-medium rounded-lg shadow-lg hover:bg-gray-50 transition-all transform hover:-translate-y-1"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={scrollToFeatures}
          className="p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
        >
          <ChevronDown className="h-6 w-6 text-blue-900" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
