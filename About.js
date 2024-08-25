// src/About.js

import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About StreamList</h1>
      <p className="about-description">
        Welcome to <strong>StreamList</strong>, a Barbie-themed video streaming
        app that brings you the latest and greatest movies! Our mission is to
        provide a fun and vibrant streaming experience for all Barbie fans.
      </p>
      <p className="about-description">
        <strong>StreamList</strong>
        allows you to browse through a wide selection of movies, add your
        favorites to your cart, and watch them whenever you like. our service is
        designed to be simple, stylish, and most importantly, fun!
      </p>
      <p className="about-description">
        With a beauitful pink theme inspired by Barbie,{" "}
        <strong>StreamList</strong> ensures that every movie night feels like a
        magical experience. Whether you're watching alone or with friends, we
        hope you enjoy using StreamList as much as we enjoyed creating it for
        you.
      </p>
    </div>
  );
}

export default About;
