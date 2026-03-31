"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    AMap?: any;
    _amapSecurityConfig?: {
      securityJsCode?: string;
    };
  }
}

const AMAP_KEY = "b279d28be7bcbfcdb31cd33a93b7dae2";
const FACULTY_CENTER: [number, number] = [106.46058775967552, 29.565669642951992];

export function AMapContactMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let mapInstance: any;
    let marker: any;
    let cancelled = false;

    const initMap = () => {
      if (!window.AMap || !mapRef.current || cancelled) {
        return;
      }

      mapInstance = new window.AMap.Map(mapRef.current, {
        zoom: 19,
        center: FACULTY_CENTER,
        dragEnable: true,
        zoomEnable: true
      });

      marker = new window.AMap.Marker({
        position: FACULTY_CENTER,
        offset: new window.AMap.Pixel(-13, -32)
      });
      mapInstance.add(marker);
    };

    if (window.AMap) {
      initMap();
      return () => {
        cancelled = true;
        if (mapInstance) mapInstance.destroy();
      };
    }

    const script = document.createElement("script");
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${AMAP_KEY}`;
    script.async = true;
    script.onload = initMap;
    script.onerror = () => setLoadError(true);
    document.body.appendChild(script);

    return () => {
      cancelled = true;
      if (mapInstance) mapInstance.destroy();
      script.remove();
    };
  }, []);

  if (loadError) {
    return <div className="contactMapFallback">地图加载失败，请稍后重试。</div>;
  }

  return <div className="contactMapFrame" ref={mapRef} />;
}
