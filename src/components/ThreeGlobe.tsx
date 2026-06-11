"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 400;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 250;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Main Sphere (Globe)
    const sphereGeometry = new THREE.SphereGeometry(80, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x1f2937,
      transparent: true,
      opacity: 0.1,
      wireframe: true,
    });
    const globe = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(globe);

    // Add particle/points to look like a digital network
    const pointsCount = 400;
    const pointsGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(pointsCount * 3);

    for (let i = 0; i < pointsCount; i++) {
      // Spherical coordinates
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 80;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x44B50C, // Wego Green
      size: 2.5,
      transparent: true,
      opacity: 0.8,
    });
    const globePoints = new THREE.Points(pointsGeometry, pointsMaterial);
    globeGroup.add(globePoints);

    // Create flight path arcs
    const createArc = (lat1: number, lon1: number, lat2: number, lon2: number, color: number) => {
      const p1 = convertLatLngToVector3(lat1, lon1, 80);
      const p2 = convertLatLngToVector3(lat2, lon2, 80);

      // Generate points along a Bezier curve
      const points = [];
      const steps = 30;
      
      // Calculate midpoint and pull it out to create an arc
      const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const distance = p1.distanceTo(p2);
      midPoint.normalize().multiplyScalar(80 + distance * 0.25); // Pull the arc outwards

      const curve = new THREE.QuadraticBezierCurve3(p1, midPoint, p2);
      const curvePoints = curve.getPoints(steps);

      const pathGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const pathMaterial = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.6,
        linewidth: 1,
      });

      const line = new THREE.Line(pathGeometry, pathMaterial);
      globeGroup.add(line);
    };

    const convertLatLngToVector3 = (lat: number, lng: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);

      const x = -(radius * Math.sin(phi) * Math.sin(theta));
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.cos(theta);

      return new THREE.Vector3(x, y, z);
    };

    // Add flight paths connecting Pakistan (Lahore/Karachi) to major destinations
    // Pakistan coordinates: lat 30, lon 70
    createArc(31.5, 74.3, 25.2, 55.2, 0x44B50C); // Lahore -> Dubai
    createArc(31.5, 74.3, 41.0, 28.9, 0xffffff); // Lahore -> Istanbul
    createArc(31.5, 74.3, 51.5, -0.1, 0x44B50C); // Lahore -> London
    createArc(24.8, 67.0, 13.7, 100.5, 0xffffff); // Karachi -> Bangkok
    createArc(24.8, 67.0, 21.5, 39.1, 0x44B50C); // Karachi -> Jeddah

    // Tilt globe
    globeGroup.rotation.x = 0.3;
    globeGroup.rotation.y = 0.5;

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      globeGroup.rotation.y += 0.002; // Spin the globe
      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[350px] lg:h-[450px] flex items-center justify-center relative select-none pointer-events-none opacity-90" />
  );
}
