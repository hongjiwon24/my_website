// Home.jsx
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import TitleSection from "../components/home/TitleSection";
import AboutSection from "../components/home/AboutSection";
import SkillSection from "../components/home/SkillSection";
import PortfolioSection from "../components/home/PortfolioSection";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <>
      <TitleSection />
      <section id="about"><AboutSection /></section>
      <section id="skill"><SkillSection /></section>
      <section id="portfolio"><PortfolioSection /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}


