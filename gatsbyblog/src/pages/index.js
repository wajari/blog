import React from "react"
import { Link } from "gatsby"
import Header from "./components/header"

export default () => (
  <div style={{ color: "purple" }}>
    <Link to="/contact/">Contact</Link>
    <br></br>
    <Link to="/about">About</Link>
    <Header headerText="Hello Gatsby!" />
    <h1>Hello world!</h1>
    <p>What a a beautiful world!</p>
    <img
      src="https://source.unsplash.com/random/400x200"
      alt="Randon image from unsplash"
    />
  </div>
)
