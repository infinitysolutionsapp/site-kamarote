import React from 'react';
import Routes from "./routes";
import {ParallaxProvider} from "react-scroll-parallax";

export default function App() {
  return (
    <ParallaxProvider>
      <Routes />
    </ParallaxProvider>
  );
}