import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const PhoneSection = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.08, 0.35, 0.5],
    ["0", "-60%", "-60%", "0%"]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.4, 0.45],
    [0, 1, 1, 0]
  );

  const contentX = useTransform(scrollYProgress, [0, 0.08], ["-20%", "0%"]);

  // animation: 2nd flow

  const appScale = useTransform(scrollYProgress, [0.08, 0.15], [1, 0.7]);

  const appOpacity = useTransform(scrollYProgress, [0.08, 0.13], [1, 0]);

  const bgOpacity = useTransform(scrollYProgress, [0.08, 0.13], [1, 0]);

  const logoCoordsX = useTransform(
    scrollYProgress,
    [0.08, 0.15],
    ["0%", "40%"]
  );

  const logoCoordsY = useTransform(
    scrollYProgress,
    [0.08, 0.15],
    ["0%", "-40%"]
  );

  // animation: 3rd flow
  const slideLeftAnim = useTransform(
    scrollYProgress,
    [0.2, 0.35, 0.5],
    ["0", "-60px", "0px"]
  );

  const fadeHandPhoneAnim = useTransform(scrollYProgress, [0.58, 0.63], [1, 0]);

  // animation: 4rd flow

  const fadeFirstWebsiteIn = useTransform(
    scrollYProgress,
    [0.54, 0.59],
    [0, 1]
  );
  const fadeSecondWebsiteIn = useTransform(
    scrollYProgress,
    [0.5, 0.56],
    [0, 1]
  );
  const fadeThirdWebsiteIn = useTransform(
    scrollYProgress,
    [0.54, 0.59],
    [0, 1]
  );

  const firstPhoneAnim = useTransform(
    scrollYProgress,
    [0.63, 0.67],
    ["0%", "24%"]
  );

  const thirdPhoneAnim = useTransform(
    scrollYProgress,
    [0.63, 0.67],
    ["0%", "-24%"]
  );

  const mainImageScaleAnim = useTransform(
    scrollYProgress,
    [0.78, 0.88],
    [1, 7]
  );
  const mainImageOpacityAnim = useTransform(
    scrollYProgress,
    [0.68, 0.75],
    [0, 1]
  );

  return (
    <div ref={ref} className="phone-section">
      <div className="phone-content-section">
        <div className="left-side-phone-content">
          <motion.div style={{ x }} className="phone-section">
            <div className="hand-phone-section">
              <motion.img
                style={{ opacity: fadeHandPhoneAnim }}
                src="/hand_phone.webp"
              />
              <motion.div style={{ x: firstPhoneAnim }} className="frame">
                <motion.img
                  style={{ opacity: fadeThirdWebsiteIn }}
                  className="frame website"
                  src="/main-website.png"
                />
                <img src="/iphone-frame.webp" />
              </motion.div>

              <div className="frame">
                <motion.img
                  style={{ opacity: fadeSecondWebsiteIn }}
                  className="frame website"
                  src="/main-website.png"
                />
                <img src="/iphone-frame.webp" />
              </div>

              <motion.div style={{ x: thirdPhoneAnim }} className="frame">
                <img src="/iphone-frame.webp" />
                <div className="transition-img">
                  <motion.img
                    style={{
                      scale: mainImageScaleAnim,
                      opacity: mainImageOpacityAnim,
                    }}
                    src="/transition-img.webp"
                  />
                </div>
                <motion.img
                  style={{ opacity: fadeFirstWebsiteIn }}
                  className="frame website"
                  src="/main-website.png"
                />
              </motion.div>

              <div className="all-app">
                <motion.img
                  style={{ scale: appScale, opacity: appOpacity }}
                  src="/all_apps.webp"
                />

                <motion.div
                  style={{
                    marginLeft: logoCoordsX,
                    marginTop: logoCoordsY,
                    x: slideLeftAnim,
                  }}
                  className="app-logo"
                >
                  <img src="/logo.svg" />
                </motion.div>
              </div>

              <div className="phone-bg-section">
                <motion.img
                  style={{ opacity: bgOpacity }}
                  className="phone-bg"
                  src="/phone-bg.webp"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="right-side-phone-content">
          <motion.div
            style={{ opacity: contentOpacity, x: contentX }}
            className="detail-content"
          >
            <h4>Lulu International App</h4>
            <h2>
              Game-changing Purchase Experience with LuLu International App
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSection;
