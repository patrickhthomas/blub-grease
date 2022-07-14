import React from "react"
import BikesMP4 from "../videos/BikesRFun.mp4"
import Logo from "../icons/logo"
import {
  container,
  intro,
  overlay,
  subtitle,
  video,
  videoWrapper,
  logo, } from "./video.module.css"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className={container}>
  <div className={overlay}> </div>
  <div className={videoWrapper}>
    <video className={video} autoplay="autoplay" muted loop>
      <source src={BikesMP4} type="video/mp4" />
    </video>
  </div>
  <div className={logo}>
  <Logo />
</div>
</div>
)
export default Video