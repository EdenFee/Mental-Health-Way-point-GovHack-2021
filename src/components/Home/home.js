import "./home.css";
import "./nicepage.css";
import "./chart.css";
import "./custom.css";
import { useEffect, useState } from "react";
import Health from "./health";
import { Chart } from "../Chart";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Reveal from "react-reveal/Reveal";

function Home() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchHealthData = async () => {
      const data = Health();

      setChartData({
        labels: data.map((row) => row.description),
        datasets: [
          {
            // label: "Numbers",
            data: data.map((row) => `${row.estimated / 1000}`),
            backgroundColor: ["#DB545A"],
          },
        ],
      });
    };
    fetchHealthData();
  }, []);

  return (
    <div>
      <section
        className="u-align-center u-black u-clearfix u-section-1"
        id="carousel_5e69"
      >
        <div
          class="chart-container"
          styles="position: relative; height:40vh; width:40vw"
        >
          <Zoom top>
            <Chart
              chartData={chartData}
              title="Common New Zealand Struggles"
              yTitle="Estimated Number"
            />
          </Zoom>
        </div>
      </section>


      <section class="u-black u-clearfix u-section-2" id="carousel_e222">
        <div class="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
          <div class="u-border-1 u-border-palette-2-base u-line u-line-horizontal u-line-1"></div>

          <Zoom>
            <div>
              <h2 class="u-align-center u-custom-font u-font-merriweather u-text u-text-palette-2-base u-text-1">
                Struggling with depression?
              </h2>
            </div>
          </Zoom>
          <Flip left>
            <div>
              <h2 class="u-align-center u-text u-text-grey-10 u-text-2">
                Lifestyle changes<br></br>
              </h2>
            </div>
          </Flip>

          <p class="u-align-center u-large-text u-text u-text-grey-5 u-text-variant u-text-3">
            <ol>
              <Reveal effect="fadeInUp">
                <div>
                  <li class="">
                    <a href="#">Excercise</a>
                  </li>
                </div>
              </Reveal>
              <Reveal effect="fadeInUp">
                <div>
                  <li class="">
                    <a href="#">Social support</a>
                  </li>
                </div>
              </Reveal>
              <Reveal effect="fadeInUp">
                <div>
                  <li class="">
                    <a href="#">Nutrition</a>
                  </li>
                </div>
              </Reveal>
              <Reveal effect="fadeInUp">
                <div>
                  <li class="">
                    <a href="#">Sleep</a>
                  </li>
                </div>
              </Reveal>
              <Reveal effect="fadeInUp">
                <div>
                  <li class="">
                    <a href="#">Stress reduction</a>
                  </li>
                </div>
              </Reveal>
            </ol>
          </p>
          <div>
            <h2 class="u-align-center u-text u-text-grey-10 u-text-4">
              Anti-depressants<br></br>
            </h2>
            <p class="u-align-center u-text-4">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
          <div>
            <h2 class="u-align-center u-text u-text-grey-10 u-text-5">
              Councilling
            </h2>
            <p class="u-align-center u-text u-text-7">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
          <div>
            <blockquote class="u-align-center u-border-black u-text u-text-grey-10 u-text-4">
              Nine tenths of helpline callers feel helped, half say their
              problem was less severe at follow up.
            </blockquote>
          </div>
          <div>
            <div class="u-container-style u-group u-group-1">
              <div class="u-container-layout">
                <a
                  href="https://nicepage.com/html-website-builder"
                  class="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-white u-btn-1"
                >
                  <span class="u-icon">
                    <svg
                      class="u-svg-content"
                      viewBox="0 0 405.333 405.333"
                      x="0px"
                      y="0px"
                      styles="width: 1em; height: 1em;"
                    >
                      <path d="M373.333,266.88c-25.003,0-49.493-3.904-72.704-11.563c-11.328-3.904-24.192-0.896-31.637,6.699l-46.016,34.752    c-52.8-28.181-86.592-61.952-114.389-114.368l33.813-44.928c8.512-8.512,11.563-20.971,7.915-32.64    C142.592,81.472,138.667,56.96,138.667,32c0-17.643-14.357-32-32-32H32C14.357,0,0,14.357,0,32    c0,205.845,167.488,373.333,373.333,373.333c17.643,0,32-14.357,32-32V298.88C405.333,281.237,390.976,266.88,373.333,266.88z"></path>
                    </svg>
                    <img></img>
                  </span>
                  &nbsp; 0800 111 757
                </a>
                <p class="u-align-center u-text u-text-grey-10 u-text-9">
                  The lowdown<br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="u-black u-clearfix u-section-3" id="carousel_0ecf">
        <div class="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
          <div class="u-border-1 u-border-palette-2-base u-line u-line-horizontal u-line-1"></div>
          <Zoom>
            <div>
              <h2 class="u-align-center u-custom-font u-font-merriweather u-text u-text-palette-2-base u-text-1">
                Struggling with Anxiety?
              </h2>
            </div>
          </Zoom>
          <h2 class="u-align-center u-text u-text-grey-10 u-text-2">
            Psychotherapy
          </h2>
          <p class="u-align-center u-text u-text-3">
            Psychotherapy or “talk therapy” can help people with anxiety
            disorders. To be effective, psychotherapy must be directed at the
            person’s specific anxieties and tailored to his or her needs.
          </p>
          <a
            href="https://www.healthline.com/health/quit-smoking/products-to-help-you-quit-smoking#Over-the-Counter-"
            class="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-none u-text-palette-1-base u-btn-1"
          >
            Pschotherapy link<br></br>
          </a>
          <h2 class="u-align-center u-text u-text-grey-10 u-text-4">
            Anti-depressants<br></br>
          </h2>
          <p class="u-align-center u-text u-text-5">
            {" "}
            Antidepressants are used to treat depression, but they can also be
            helpful for treating anxiety disorders. They may help improve the
            way your brain uses certain chemicals that control mood or stress.
            You may need to try several different antidepressant medicines
            before finding the one that improves your symptoms and has
            manageable side effects.
          </p>
          <blockquote class="u-align-center u-border-black u-text u-text-grey-10 u-text-6">
            Nine tenths of helpline callers feel helped, half say their problem
            was less severe at follow up.
          </blockquote>
          <div class="u-container-style u-group u-group-1">
            <div class="u-container-layout">
              <a
                href="https://nicepage.com/html-website-builder"
                class="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-white u-btn-2"
              >
                <span class="u-icon">
                  <svg
                    class="u-svg-content"
                    viewBox="0 0 405.333 405.333"
                    x="0px"
                    y="0px"
                    styles="width: 1em; height: 1em;"
                  >
                    <path d="M373.333,266.88c-25.003,0-49.493-3.904-72.704-11.563c-11.328-3.904-24.192-0.896-31.637,6.699l-46.016,34.752    c-52.8-28.181-86.592-61.952-114.389-114.368l33.813-44.928c8.512-8.512,11.563-20.971,7.915-32.64    C142.592,81.472,138.667,56.96,138.667,32c0-17.643-14.357-32-32-32H32C14.357,0,0,14.357,0,32    c0,205.845,167.488,373.333,373.333,373.333c17.643,0,32-14.357,32-32V298.88C405.333,281.237,390.976,266.88,373.333,266.88z"></path>
                  </svg>
                  <img></img>
                </span>
                &nbsp; 0800 111 757
              </a>
              <p class="u-align-center u-text u-text-grey-10 u-text-7">
                The lowdown<br></br>
              </p>
            </div>
          </div>
          <a
            href="https://www.nimh.nih.gov/health/topics/anxiety-disorders"
            class="u-btn u-button-style u-none u-text-hover-palette-1-base u-text-palette-2-base u-btn-3"
          >
            Read More&nbsp;
            <span class="u-icon">
              <svg
                class="u-svg-content"
                viewBox="0 -32 426.66667 426"
                styles="width: 1em; height: 1em;"
              >
                <path d="m213.332031 181.667969c0 4.265625-1.277343 8.53125-3.625 11.730469l-106.667969 160c-3.839843 5.761718-10.238281 9.601562-17.707031 9.601562h-64c-11.730469 0-21.332031-9.601562-21.332031-21.332031 0-4.269531 1.28125-8.535157 3.625-11.734375l98.773438-148.265625-98.773438-148.269531c-2.34375-3.199219-3.625-7.464844-3.625-11.730469 0-11.734375 9.601562-21.335938 21.332031-21.335938h64c7.46875 0 13.867188 3.839844 17.707031 9.601563l106.667969 160c2.347657 3.199218 3.625 7.464844 3.625 11.734375zm0 0"></path>
                <path d="m426.667969 181.667969c0 4.265625-1.28125 8.53125-3.628907 11.730469l-106.664062 160c-3.839844 5.761718-10.242188 9.601562-17.707031 9.601562h-64c-11.734375 0-21.335938-9.601562-21.335938-21.332031 0-4.269531 1.28125-8.535157 3.628907-11.734375l98.773437-148.265625-98.773437-148.269531c-2.347657-3.199219-3.628907-7.464844-3.628907-11.730469 0-11.734375 9.601563-21.335938 21.335938-21.335938h64c7.464843 0 13.867187 3.839844 17.707031 9.601563l106.664062 160c2.347657 3.199218 3.628907 7.464844 3.628907 11.734375zm0 0"></path>
              </svg>
              <img></img>
            </span>
          </a>
        </div>
      </section>

      <section class="u-black u-clearfix u-section-4" id="carousel_b073">
        <div class="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
          <div class="u-border-1 u-border-palette-2-base u-line u-line-horizontal u-line-1"></div>
          <Flip left>
            <div>
              <h2 class="u-align-center u-custom-font u-font-merriweather u-text u-text-palette-2-base u-text-1">
                Struggling with smoking?
              </h2>
            </div>
          </Flip>
          <a
            href="https://www.healthline.com/health/quit-smoking/products-to-help-you-quit-smoking#Over-the-Counter-"
            class="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-none u-text-palette-1-base u-btn-1"
          >
            Healthline | Products to quit smoking
          </a>
          <blockquote class="u-align-center u-border-black u-text u-text-grey-10 u-text-2">
            Nine tenths of helpline callers feel helped, half say their problem
            was less severe at follow up.
          </blockquote>
          <p class="u-align-center u-text u-text-3">
            Quit Advisors work with people to make a plan.
          </p>
          <div class="u-container-style u-group u-group-1">
            <div class="u-container-layout u-container-layout-1">
              <a
                href="https://nicepage.com/html-website-builder"
                class="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-white u-btn-2"
              >
                <span class="u-icon">
                  <svg
                    class="u-svg-content"
                    viewBox="0 0 405.333 405.333"
                    x="0px"
                    y="0px"
                    styles="width: 1em; height: 1em;"
                  >
                    <path d="M373.333,266.88c-25.003,0-49.493-3.904-72.704-11.563c-11.328-3.904-24.192-0.896-31.637,6.699l-46.016,34.752    c-52.8-28.181-86.592-61.952-114.389-114.368l33.813-44.928c8.512-8.512,11.563-20.971,7.915-32.64    C142.592,81.472,138.667,56.96,138.667,32c0-17.643-14.357-32-32-32H32C14.357,0,0,14.357,0,32    c0,205.845,167.488,373.333,373.333,373.333c17.643,0,32-14.357,32-32V298.88C405.333,281.237,390.976,266.88,373.333,266.88z"></path>
                  </svg>
                  <img></img>
                </span>
                &nbsp; 0800 778 778
              </a>
              <p class="u-align-center u-text u-text-grey-10 u-text-4">
                Quit line:<br></br>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="u-black u-clearfix u-section-5" id="carousel_c913">
        <div class="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
          <div class="u-border-1 u-border-palette-2-base u-line u-line-horizontal u-line-1"></div>
          <Flip left>
            <div>
              <h2 class="u-align-center u-custom-font u-font-merriweather u-text u-text-palette-2-base u-text-1">
                Struggling with cannibis?
              </h2>
            </div>
          </Flip>
          <a
            href="https://www.healthline.com/health/how-to-stop-smoking-weed#handling-social-situations"
            class="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-none u-text-palette-1-base u-btn-1"
          >
            Healthline | How to stop smoking weed
          </a>
        </div>
      </section>
      <section
        class="u-align-center u-black u-clearfix u-section-6"
        id="carousel_3cbe"
      >
        <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div class="u-layout">
              <div class="u-layout-row">
                <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                  <div class="u-container-layout u-container-layout-1">
                    <h5 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-palette-2-base u-text-1">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution.&nbsp;
                    </h5>
                    <p class="u-text u-text-default u-text-2">
                      Living Life Tomorrow's fate, though thou be wise, Thou
                      canst not tell nor yet surmise; Pass, therefore, not today
                      in vain, For it will never come again. You know, my
                      friends, with what a brave carouse I made a Second
                      Marriage in my house; favored old barren reason from my
                      bed, and took the daughter of the vine to
                      spouse.&nbsp;&nbsp;The Worldly Hope men set their Hearts
                      upon Turns Ashes - or it prospers; and anon, Like Snow
                      upon the Desert's dusty Face, Lighting a little hour or
                      two - is gone.
                    </p>
                  </div>
                </div>
                <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                  <div class="u-container-layout u-container-layout-2">
                    <p class="u-text u-text-3">
                      Living Life Tomorrow's fate, though thou be wise, Thou
                      canst not tell nor yet surmise; Pass, therefore, not today
                      in vain, For it will never come again. You know, my
                      friends, with what a brave carouse I made a Second
                      Marriage in my house; favored old barren reason from my
                      bed, and took the daughter of the vine to
                      spouse.&nbsp;&nbsp;The Worldly Hope men set their Hearts
                      upon Turns Ashes - or it prospers; and anon, Like Snow
                      upon the Desert's dusty Face, Lighting a little hour or
                      two - is gone.
                    </p>
                    <img
                      src="images/829-8293847_jake-corman-signature-jake-signaturecopy.png"
                      alt=""
                      class="u-image u-image-contain u-image-default u-image-1"
                      data-image-width="1280"
                      data-image-height="911"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <footer
        className="u-align-center u-clearfix u-footer u-grey-80 u-footer"
        id="sec-1514"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <p className="u-small-text u-text u-text-variant u-text-1">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
        </div>
      </footer>
      <section className="u-backlink u-clearfix u-grey-80">
        <a
          className="u-link"
          href="https://nicepage.com/website-templates"
          target="_blank"
        >
          <span>Website Templates</span>
        </a>
        <p className="u-text">
          <span>created with</span>
        </p>
        <a className="u-link" href="https://nicepage.com/" target="_blank">
          <span>Website Builder Software</span>
        </a>
        .
      </section>
    </div>
  );
}

export default Home;
