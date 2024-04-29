import "./GlobeAnimation.css";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
let w,h;
if (window.matchMedia("(min-width: 640px)").matches && window.matchMedia("(max-width: 1240px)").matches) {
  w = 1.5;
  h = 1.5;
}
else{
  w=2,h=2;
}

export default function App() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * w,
      height: 600 * h,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3647, 0.1294, 0.4980],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 }
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

 
  return (
    <div className="GlobeA">
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "1000%", aspectRatio: 1 }}
      />
    </div>
  );
}
