"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Slider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          {/*  */}
          <div
            className="hero h-[200px] lg:h-[500px]"
            style={{
              backgroundImage:
                "url(https://a6e8z9v6.stackpathcdn.com/akea/homepage3/wp-content/uploads/2018/11/pexels-photo-25284-1300x530.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
            <div className="hero-overlay bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w- text-white  ">
                <h1 className="mb-5 lg:text-7xl text-2xl font-bold text-black  lg:pt-40 pt-10 ">
                  Unleash Your Adventurous Spirit
                </h1>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="keen-slider__slide number-slide2">
          {/*  */}
          <div
            className="hero h-[200px] lg:h-[500px]"
            style={{
              backgroundImage:
                "url(https://a6e8z9v6.stackpathcdn.com/akea/homepage3/wp-content/uploads/2018/11/pexels-photo-871053-1300x530.jpeg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
            <div className="hero-overlay bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w- text-white  ">
                <h1 className="mb-5 lg:text-7xl text-2xl font-bold  text-black lg:pt-40 pt-10">
                  Journey Through Time
                </h1>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="keen-slider__slide number-slide3">
          {/*  */}
          <div
            className="hero h-[200px] lg:h-[500px]"
            style={{
              backgroundImage:
                "url(https://a6e8z9v6.stackpathcdn.com/akea/homepage3/wp-content/uploads/2018/11/hugues-de-buyer-mimeure-335733-unsplash-900x537.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
            <div className="hero-overlay bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w- text-white  ">
                <h1 className="mb-5 lg:text-7xl text-2xl font-bold  text-black lg:pt-40 pt-10 ">
                  Relaxation at its Best
                </h1>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Slider;
