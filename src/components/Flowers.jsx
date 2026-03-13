import './Flowers.css';

export default function Flowers() {
  return (
    <div className="flowers-bg" aria-hidden="true">
      <div className="flower flower-1">
        <svg viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="8" fill="rgba(252, 231, 243, 0.8)" />
          <ellipse cx="40" cy="20" rx="12" ry="18" fill="rgba(249, 168, 212, 0.4)" transform="rotate(0 40 40)" />
          <ellipse cx="40" cy="20" rx="12" ry="18" fill="rgba(249, 168, 212, 0.4)" transform="rotate(72 40 40)" />
          <ellipse cx="40" cy="20" rx="12" ry="18" fill="rgba(249, 168, 212, 0.4)" transform="rotate(144 40 40)" />
          <ellipse cx="40" cy="20" rx="12" ry="18" fill="rgba(249, 168, 212, 0.4)" transform="rotate(216 40 40)" />
          <ellipse cx="40" cy="20" rx="12" ry="18" fill="rgba(249, 168, 212, 0.4)" transform="rotate(288 40 40)" />
        </svg>
      </div>
      <div className="flower flower-2">
        <svg viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="6" fill="rgba(233, 213, 255, 0.9)" />
          <ellipse cx="30" cy="12" rx="8" ry="14" fill="rgba(192, 132, 252, 0.35)" transform="rotate(0 30 30)" />
          <ellipse cx="30" cy="12" rx="8" ry="14" fill="rgba(192, 132, 252, 0.35)" transform="rotate(60 30 30)" />
          <ellipse cx="30" cy="12" rx="8" ry="14" fill="rgba(192, 132, 252, 0.35)" transform="rotate(120 30 30)" />
          <ellipse cx="30" cy="12" rx="8" ry="14" fill="rgba(192, 132, 252, 0.35)" transform="rotate(180 30 30)" />
          <ellipse cx="30" cy="12" rx="8" ry="14" fill="rgba(192, 132, 252, 0.35)" transform="rotate(240 30 30)" />
          <ellipse cx="30" cy="12" rx="8" ry="14" fill="rgba(192, 132, 252, 0.35)" transform="rotate(300 30 30)" />
        </svg>
      </div>
      <div className="flower flower-3">
        <svg viewBox="0 0 50 50" fill="none">
          <circle cx="25" cy="25" r="5" fill="rgba(253, 251, 255, 0.9)" />
          <circle cx="25" cy="10" r="6" fill="rgba(244, 114, 182, 0.3)" />
          <circle cx="40" cy="25" r="6" fill="rgba(244, 114, 182, 0.3)" />
          <circle cx="25" cy="40" r="6" fill="rgba(244, 114, 182, 0.3)" />
          <circle cx="10" cy="25" r="6" fill="rgba(244, 114, 182, 0.3)" />
          <circle cx="33" cy="15" r="5" fill="rgba(244, 114, 182, 0.25)" />
          <circle cx="35" cy="35" r="5" fill="rgba(244, 114, 182, 0.25)" />
          <circle cx="15" cy="35" r="5" fill="rgba(244, 114, 182, 0.25)" />
          <circle cx="17" cy="15" r="5" fill="rgba(244, 114, 182, 0.25)" />
        </svg>
      </div>
      <div className="flower flower-4">
        <svg viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="7" fill="rgba(252, 231, 243, 0.85)" />
          <ellipse cx="35" cy="16" rx="10" ry="16" fill="rgba(236, 72, 153, 0.25)" transform="rotate(45 35 35)" />
          <ellipse cx="35" cy="16" rx="10" ry="16" fill="rgba(236, 72, 153, 0.25)" transform="rotate(135 35 35)" />
          <ellipse cx="35" cy="16" rx="10" ry="16" fill="rgba(236, 72, 153, 0.25)" transform="rotate(225 35 35)" />
          <ellipse cx="35" cy="16" rx="10" ry="16" fill="rgba(236, 72, 153, 0.25)" transform="rotate(315 35 35)" />
        </svg>
      </div>
      <div className="flower flower-5">
        <svg viewBox="0 0 45 45" fill="none">
          <circle cx="22" cy="22" r="4" fill="rgba(233, 213, 255, 0.9)" />
          <ellipse cx="22" cy="10" rx="6" ry="10" fill="rgba(167, 139, 250, 0.3)" transform="rotate(36 22 22)" />
          <ellipse cx="22" cy="10" rx="6" ry="10" fill="rgba(167, 139, 250, 0.3)" transform="rotate(108 22 22)" />
          <ellipse cx="22" cy="10" rx="6" ry="10" fill="rgba(167, 139, 250, 0.3)" transform="rotate(180 22 22)" />
          <ellipse cx="22" cy="10" rx="6" ry="10" fill="rgba(167, 139, 250, 0.3)" transform="rotate(252 22 22)" />
          <ellipse cx="22" cy="10" rx="6" ry="10" fill="rgba(167, 139, 250, 0.3)" transform="rotate(324 22 22)" />
        </svg>
      </div>
      <div className="flower flower-6">
        <svg viewBox="0 0 55 55" fill="none">
          <circle cx="27" cy="27" r="6" fill="rgba(252, 231, 243, 0.8)" />
          <ellipse cx="27" cy="12" rx="8" ry="12" fill="rgba(249, 168, 212, 0.35)" transform="rotate(0 27 27)" />
          <ellipse cx="27" cy="12" rx="8" ry="12" fill="rgba(249, 168, 212, 0.35)" transform="rotate(90 27 27)" />
          <ellipse cx="27" cy="12" rx="8" ry="12" fill="rgba(249, 168, 212, 0.35)" transform="rotate(180 27 27)" />
          <ellipse cx="27" cy="12" rx="8" ry="12" fill="rgba(249, 168, 212, 0.35)" transform="rotate(270 27 27)" />
        </svg>
      </div>
    </div>
  );
}
