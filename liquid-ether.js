(function () {
  if (window.__liquidEtherLoaded) return;
  window.__liquidEtherLoaded = true;

  const styleId = "liquid-ether-style";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .liquid-ether{
        position:fixed;
        inset:-20% -10% -35% -10%;
        z-index:-1;
        pointer-events:none;
        filter:saturate(140%);
        opacity:.85;
      }
      .liquid-ether span{
        position:absolute;
        width:clamp(280px,32vw,540px);
        height:clamp(280px,32vw,540px);
        border-radius:50%;
        mix-blend-mode:screen;
        filter:blur(0px);
        opacity:.65;
        animation:ether-move var(--ether-dur,18s) ease-in-out infinite;
        transform:translate3d(var(--ether-x1,0),var(--ether-y1,0),0) scale(.9);
        background:radial-gradient(circle at 30% 30%, var(--ether-core,#22d3ee), transparent 65%);
      }
      @keyframes ether-move{
        0%{transform:translate3d(var(--ether-x1,0),var(--ether-y1,0),0) scale(.85) rotate(0deg);}
        50%{transform:translate3d(var(--ether-x2,0),var(--ether-y2,0),0) scale(1.08) rotate(140deg);}
        100%{transform:translate3d(var(--ether-x1,0),var(--ether-y1,0),0) scale(.85) rotate(1turn);}
      }
      @media (prefers-reduced-motion:reduce){
        .liquid-ether span{
          animation:none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function createBlob(cfg) {
    const blob = document.createElement("span");
    blob.style.setProperty("--ether-x1", cfg.x1);
    blob.style.setProperty("--ether-y1", cfg.y1);
    blob.style.setProperty("--ether-x2", cfg.x2);
    blob.style.setProperty("--ether-y2", cfg.y2);
    blob.style.setProperty("--ether-core", cfg.color);
    blob.style.setProperty("--ether-dur", cfg.duration);
    return blob;
  }

  function init() {
    const target = document.createElement("div");
    target.className = "liquid-ether";
    const blobs = [
      { x1: "-15vw", y1: "0vh",  x2: "-5vw",  y2: "25vh", color: "rgba(34,211,238,.65)", duration: "22s" },
      { x1: "30vw",  y1: "-10vh", x2: "10vw", y2: "35vh", color: "rgba(59,130,246,.55)", duration: "26s" },
      { x1: "10vw",  y1: "20vh", x2: "-10vw", y2: "-15vh", color: "rgba(248,113,113,.45)", duration: "24s" },
      { x1: "-5vw",  y1: "45vh", x2: "20vw", y2: "10vh", color: "rgba(168,85,247,.5)", duration: "28s" }
    ];
    blobs.forEach(cfg => target.appendChild(createBlob(cfg)));
    document.body.appendChild(target);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
