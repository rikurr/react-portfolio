import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import mojs from "mo-js";

import HeartIcon from "./heart-icon";
import HeartCount from "./heart-count";
import CountTotal from "./count-total";

import "./index.css";

const HeartAnimationContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-height: 25vh;
`;

const initialState = {
  count: 0,
  countTotal: 30,
  isClicked: false
};

const useHeartAnimation = () => {
  const [animationTimeline, setAnimationTimeline] = useState(
    () => new mojs.Timeline()
  );

  useLayoutEffect(() => {
    const tlDuration = 300;
    const scaleButton = new mojs.Html({
      el: "#heart",
      duration: tlDuration,
      scale: { 1.3: 1 },
      easing: mojs.easing.ease.out
    });

    const triangleBurst = new mojs.Burst({
      parent: "#heart",
      radius: { 50: 95 },
      count: 5,
      angle: 30,
      children: {
        shape: "circle",
        radius: { 6: 0 },
        stroke: "#ff6f61",
        fill: "#ff6f61",
        strokeWidth: 2,
        angle: 210,
        delay: 30,
        speed: 0.1,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        duration: tlDuration
      }
    });

    const circleBurst = new mojs.Burst({
      parent: "#heart",
      radius: { 50: 90 },
      angle: 60,
      duration: tlDuration,
      children: {
        shape: "circle",
        fill: "#6b5b95",
        delay: 30,
        speed: 0.1,
        radius: { 4: 0 },
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      }
    });

    const addBurst = new mojs.Burst({
      parent: "#heart",
      radius: { 50: 85 },
      angle: 80,
      duration: tlDuration,
      children: {
        shape: "circle",
        fill: "#66ff66",
        delay: 30,
        speed: 0.1,
        radius: { 4: 0 },
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      }
    });

    const countAnimation = new mojs.Html({
      el: "#count",
      opacity: { 0: 1 },
      duration: tlDuration,
      y: { 0: -30 }
    }).then({
      opacity: { 1: 0 },
      y: -80,
      delay: tlDuration / 2
    });

    const countTotalAnimation = new mojs.Html({
      el: "#countTotal",
      opacity: { 0: 1 },
      delay: (3 * tlDuration) / 2,
      duration: tlDuration,
      y: { 0: -3 }
    });

    const heart = document.getElementById("heart");
    heart.style.transform = "scale(1,1)";
    const newAnimationTimeline = animationTimeline.add([
      scaleButton,
      countAnimation,
      countTotalAnimation,
      triangleBurst,
      circleBurst,
      addBurst
    ]);
    setAnimationTimeline(newAnimationTimeline);
  }, [animationTimeline]);
  return animationTimeline;
};

const HeartAnimation = () => {
  const MAXIMUM_USER_HEART = 25;
  const [heartState, setHeartState] = useState(initialState);
  const { count, countTotal, isClicked } = heartState;

  const animationTimeline = useHeartAnimation();

  const handleHeartClick = () => {
    animationTimeline.replay();

    setHeartState(prevState => ({
      isClicked: true,
      count: Math.min(count + 1, MAXIMUM_USER_HEART),
      countTotal:
        count < MAXIMUM_USER_HEART
          ? prevState.countTotal + 1
          : prevState.countTotal
    }));
  };
  return (
    <HeartAnimationContainer>
      <button id="heart" className="heart" onClick={handleHeartClick}>
        <HeartIcon isClicked={isClicked} />
        <HeartCount count={count} />
        <CountTotal countTotal={countTotal} />
      </button>
    </HeartAnimationContainer>
  );
};

const Usage = () => {
  return <HeartAnimation />;
};

export default Usage;
