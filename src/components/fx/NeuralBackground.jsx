import React, { useEffect, useRef } from 'react';

// Interactive neural-network field: drifting nodes, weighted edges, forward-pass pulses
// travelling along edges, and a cursor that lights up the neurons it gets close to.
const INK = '30, 27, 75';
const VIOLET = '124, 58, 237';
const ORANGE = '249, 115, 22';

const NeuralBackground = ({ className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const host = canvas.parentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0;
    let h = 0;
    let nodes = [];
    let pulses = [];
    let raf = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999, active: false };
    const LINK = 150;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = host.clientWidth;
      h = host.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.max(28, Math.round((w * h) / 16000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1.4 + Math.random() * 1.8,
        hot: 0,
      }));
      pulses = [];
    };

    const neighbours = () => {
      const edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) edges.push([i, j, d]);
        }
      }
      return edges;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const edges = neighbours();

      for (const [i, j, d] of edges) {
        const a = nodes[i];
        const b = nodes[j];
        const heat = Math.max(a.hot, b.hot);
        const alpha = (1 - d / LINK) * (0.14 + heat * 0.5);
        ctx.strokeStyle = heat > 0.05 ? `rgba(${VIOLET}, ${alpha})` : `rgba(${INK}, ${alpha})`;
        ctx.lineWidth = heat > 0.05 ? 1.1 : 0.8;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      if (mouse.active) {
        for (const n of nodes) {
          const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (d < 180) {
            ctx.strokeStyle = `rgba(${VIOLET}, ${(1 - d / 180) * 0.55})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      for (const p of pulses) {
        const a = nodes[p.a];
        const b = nodes[p.b];
        if (!a || !b) continue;
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        ctx.fillStyle = `rgba(${ORANGE}, 0.95)`;
        ctx.beginPath();
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${ORANGE}, 0.18)`;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const n of nodes) {
        const fill = n.hot > 0.05 ? `rgba(${VIOLET}, ${0.55 + n.hot * 0.45})` : `rgba(${INK}, 0.35)`;
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + n.hot * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
      return edges;
    };

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        if (mouse.active) {
          const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (d < 180) n.hot = Math.min(1, n.hot + 0.08);
          if (d < 120) {
            n.x += ((mouse.x - n.x) / d) * 0.25;
            n.y += ((mouse.y - n.y) / d) * 0.25;
          }
        }
        n.hot *= 0.96;
      }
      pulses = pulses.filter((p) => {
        p.t += p.speed;
        if (p.t >= 1) {
          const target = nodes[p.b];
          if (target) target.hot = Math.min(1, target.hot + 0.6);
          return false;
        }
        return true;
      });
    };

    const loop = () => {
      if (!visible) return;
      step();
      const edges = draw();
      if (edges.length && pulses.length < 14 && Math.random() < 0.18) {
        const [a, b] = edges[Math.floor(Math.random() * edges.length)];
        pulses.push(Math.random() < 0.5 ? { a, b, t: 0, speed: 0.012 + Math.random() * 0.02 } : { a: b, b: a, t: 0, speed: 0.012 + Math.random() * 0.02 });
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = mouse.x >= 0 && mouse.y >= 0 && mouse.x <= w && mouse.y <= h;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    build();
    if (reduced) {
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    const io = new IntersectionObserver(([entry]) => {
      const was = visible;
      visible = entry.isIntersecting;
      if (visible && !was && !reduced) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    const ro = new ResizeObserver(() => {
      build();
      if (reduced) draw();
    });
    ro.observe(host);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`} />;
};

export default NeuralBackground;
