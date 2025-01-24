import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Pinnr Landing</title>
          <meta property="og:title" content="Pinnr Landing" />
        </Head>
        <section className="home-hero">
          <header className="home-header1">
            <div id="mobile-menu" className="home-mobile-navigation">
              <img
                alt="pastedImage"
                src="https://i.ibb.co/ZfQ01mH/Logo.png"
                className="home-logo1"
              />
              <div className="home-links1">
                <a href="#features" className="home-link10 Link">
                  Features
                </a>
                <a href="#how-it-works" className="home-link11 Link">
                  How it works
                </a>
                <a href="#why-pinnr?" className="home-link12 Link">
                  Why Pinnr?
                </a>
                <span className="Link">Blog</span>
              </div>
              <div id="close-mobile-menu" className="home-close-mobile-menu">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="home-icon10"
                >
                  <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
            <div className="home-desktop-navigation">
              <nav className="home-centered">
                <div className="home-left1">
                  <Link href="/">
                    <a className="home-link13">
                      <img
                        alt="pastedImage"
                        src="https://i.ibb.co/ZfQ01mH/Logo.png"
                        className="home-logo2"
                      />
                    </a>
                  </Link>
                  <div className="home-links2">
                    <a href="#features" className="home-link14 Link">
                      Features
                    </a>
                    <a href="#how-it-works" className="home-link15 Link">
                      How it works
                    </a>
                    <a href="#why-pinnr?" className="home-link16 Link">
                      Why Pinnr?
                    </a>
                    <span className="Link">Blog</span>
                  </div>
                </div>
                <div className="home-right1">
                  <div id="open-mobile-menu" className="home-burger-menu">
                    <img
                      alt="pastedImage"
                      src="/pastedimage-yxbd.svg"
                      className="home-mobile-menu-button"
                    />
                  </div>
                  <a
                    href="https://tally.so/r/mKvYlD"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link17"
                  >
                    <div className="home-get-started1">
                      <span className="home-text102">Get Early Access</span>
                    </div>
                  </a>
                </div>
              </nav>
            </div>
            <div>
              <div className="home-container12">
                <Script
                  html={`<script defer>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
                ></Script>
              </div>
            </div>
          </header>
          <div className="home-container13">
            <header className="home-content1">
              <h1 className="home-text103">
                <span>
                  Turn Pinterest Trends into E-Commerce
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text105">Sales</span>
                <br></br>
              </h1>
              <p className="home-text107">
                Discover trending topics on Pinterest, optimize your content,
                and grow your e-commerce brand with Pinnr’s AI-powered platform.
              </p>
              <a
                href="https://tally.so/r/mKvYlD"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link18"
              >
                <div className="home-get-started2">
                  <span className="home-text108">Get Early Access</span>
                </div>
              </a>
            </header>
            <img
              alt="pastedImage"
              src="https://i.ibb.co/WK1Z3jL/Desktop-6-5.png"
              loading="lazy"
              className="home-image"
            />
          </div>
        </section>
        <div className="home-container14">
          <div id="features" className="home-container15">
            <div className="home-container16">
              <img
                alt="pastedImage"
                src="https://i.ibb.co/VTWfNc2/Sparkle.png"
                className="home-icon12"
              />
              <span className="home-text109">Features</span>
            </div>
            <div className="home-title1">
              <span className="home-text110">
                <span>
                  The Pinnr
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text112">Difference</span>
              </span>
              <p className="home-text113">
                Powerful AI. Data-backed strategies. Drive growth and turn
                Pinterest into a sales engine for your e-commerce brand.
              </p>
            </div>
          </div>
          <div className="home-container17">
            <div className="home-banner-manage1">
              <div className="home-container18">
                <div className="home-left2">
                  <div className="home-container19">
                    <img
                      alt="pastedImage"
                      src="https://i.ibb.co/JCS79RV/Brain.png"
                      className="home-icon13"
                    />
                    <span className="home-text114">Smart Insights</span>
                  </div>
                  <span className="home-text115 title">
                    <span>Smarter Strategies with AI</span>
                    <br></br>
                  </span>
                  <span className="home-text118">
                    Unlock powerful data-driven insights to refine your
                    Pinterest strategy. From analyzing trends to tracking
                    performance, Pinnr&apos;s AI ensures every decision drives
                    better results and maximizes ROI.
                  </span>
                  <a
                    href="https://tally.so/r/mKvYlD"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link19"
                  >
                    <div className="home-get-started3">
                      <span className="home-text119">Get Early Access</span>
                    </div>
                  </a>
                </div>
                <div className="home-image-container1">
                  <img
                    alt="pastedImage"
                    src="https://i.imgur.com/flcAoMc.png"
                    className="home-cards-image1"
                  />
                </div>
              </div>
            </div>
            <div className="home-banner1">
              <div className="home-container20">
                <div className="home-left3">
                  <div className="home-container21">
                    <img
                      alt="pastedImage"
                      src="https://i.ibb.co/wpq5gCK/Palette.png"
                      className="home-icon14"
                    />
                    <span className="home-text120">Visual Boost</span>
                  </div>
                  <h2 className="home-text121 title">Enhance Pins with AI</h2>
                  <span className="home-text122">
                    Transform your visuals into scroll-stopping pins with
                    Pinnr’s AI. Automatically optimize images for Pinterest,
                    ensuring they captivate your audience and stand out in a sea
                    of content.
                  </span>
                </div>
                <div className="home-image-container2">
                  <img
                    alt="pastedImage"
                    src="https://i.imgur.com/fuP9x5b.png"
                    className="home-cards-image2"
                  />
                </div>
              </div>
            </div>
            <div className="home-banner-manage2">
              <div className="home-container22">
                <div className="home-left4">
                  <div className="home-container23">
                    <img
                      alt="pastedImage"
                      src="https://i.ibb.co/NyCv2pN/Rocket-Launch.png"
                      className="home-icon15"
                    />
                    <span className="home-text123">Engagement Boost</span>
                  </div>
                  <h2 className="home-text124 title">
                    Personalized Strategies for Sales
                  </h2>
                  <span className="home-text125">
                    Pinnr provides AI-driven strategies to tailor your Pinterest
                    content for maximum engagement. Capture attention, drive
                    traffic, and convert views into sales with data-backed,
                    targeted campaigns.
                  </span>
                  <a
                    href="https://tally.so/r/mKvYlD"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link20"
                  >
                    <div className="home-get-started4">
                      <span className="home-text126">Get Early Access</span>
                    </div>
                  </a>
                </div>
                <div className="home-image-container3">
                  <img
                    alt="pastedImage"
                    src="https://i.imgur.com/BDFA7Qm.png"
                    className="home-cards-image3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="home-features1">
          <div className="home-title2">
            <span className="home-text127">
              <span>
                Maximize
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text129">
                Growth, Visibility, and Sales
              </span>
              <span>
                {' '}
                with
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Pinnr</span>
            </span>
            <p className="home-text132">
              Pinnr boosts your Pinterest strategy, increases visibility, and
              drives more sales with AI-powered tools.
            </p>
          </div>
          <div className="home-cards1">
            <div className="home-container24">
              <div className="home-publish1 card">
                <img
                  alt="pastedImage"
                  src="https://i.ibb.co/KwmJcxD/TrendUp.png"
                  className="home-icon16"
                />
                <div className="home-container25">
                  <span className="home-text133">
                    Drive Exponential Growth with AI
                  </span>
                  <span className="home-text134">
                    Leverage AI to optimize your Pinterest strategy, drive more
                    traffic, and significantly grow your customer base.
                  </span>
                </div>
              </div>
              <div className="home-publish2 card">
                <img
                  alt="pastedImage"
                  src="https://i.ibb.co/Ns8kym1/Eyes.png"
                  className="home-icon17"
                />
                <div className="home-container26">
                  <span className="home-text135">
                    Boost Your Brand Visibility on Pinterest
                  </span>
                  <span className="home-text136">
                    Optimize pins and content for maximum visibility, reaching
                    the right audience and increasing engagement.
                  </span>
                </div>
              </div>
              <div className="home-publish3 card">
                <img
                  alt="pastedImage"
                  src="https://i.ibb.co/w4tTPw7/Money-Wavy.png"
                  className="home-icon18"
                />
                <div className="home-container27">
                  <span className="home-text137">
                    Transform Traffic into Sales
                  </span>
                  <span className="home-text138">
                    Convert Pinterest visitors into paying customers and drive a
                    higher ROI with targeted strategies.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-features2">
          <div className="home-title3">
            <span className="home-text139">
              <span>
                Everything You Need to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text141">Dominate Pinterest</span>
            </span>
            <p className="home-text142">
              Pinnr is your go-to platform for Pinterest success. Boost
              engagement, visibility, and sales with ease.
            </p>
          </div>
          <div className="home-cards2">
            <div className="home-container28">
              <div className="home-publish4 card">
                <img
                  alt="pastedImage"
                  src="https://i.imgur.com/ZZzZXVe.png"
                  className="home-icon19"
                />
                <div className="home-container29">
                  <div className="home-container30">
                    <div className="home-container31">
                      <span className="home-text143">
                        Discover Trends in Real-Time
                      </span>
                      <span className="home-text144">
                        Stay ahead by identifying trending topics, so you can
                        tailor your content to what&apos;s hot right now.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-publish5 card">
                <img
                  alt="pastedImage"
                  src="https://i.imgur.com/w4xacR8.png"
                  className="home-icon20"
                />
                <div className="home-container32">
                  <div className="home-container33">
                    <div className="home-container34">
                      <span className="home-text145">
                        Effortlessly Create Pinterest Boards
                      </span>
                      <span className="home-text146">
                        Automatically build engaging boards with AI-driven
                        recommendations that resonate with your audience.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-publish6 card">
                <img
                  alt="pastedImage"
                  src="https://i.imgur.com/KLBZIRS.png"
                  className="home-icon21"
                />
                <div className="home-container35">
                  <div className="home-container36">
                    <div className="home-container37">
                      <span className="home-text147">
                        Generate High-Impact Pins with AI
                      </span>
                      <span className="home-text148">
                        Quickly create SEO-friendly titles, descriptions, and
                        visuals designed to capture attention and boost
                        engagement.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container38">
              <div className="home-publish7 card">
                <img
                  alt="pastedImage"
                  src="/pastedimage-3c4o-1200w.png"
                  className="home-pasted-image"
                />
                <img
                  alt="pastedImage"
                  src="https://i.imgur.com/m0TceMN.png"
                  className="home-icon22"
                />
                <div className="home-container39">
                  <div className="home-container40">
                    <div className="home-container41">
                      <span className="home-text149">
                        Unlock High-Performing Keywords
                      </span>
                      <span className="home-text150">
                        Discover trending keywords that maximize visibility and
                        drive traffic to your pins and content.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-publish8 card">
                <img
                  alt="pastedImage"
                  src="https://i.imgur.com/lOecCw8.png"
                  className="home-icon23"
                />
                <div className="home-container42">
                  <div className="home-container43">
                    <div className="home-container44">
                      <span className="home-text151">
                        Enhance Photos with AI
                      </span>
                      <span className="home-text152">
                        Optimize your pin images to stand out in the feed with
                        AI tools that enhance visual appeal.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-publish9 card">
                <img
                  alt="pastedImage"
                  src="https://i.imgur.com/b8ODGFa.png"
                  className="home-icon24"
                />
                <div className="home-container45">
                  <div className="home-container46">
                    <div className="home-container47">
                      <span className="home-text153">
                        Track Performance with Analytics
                      </span>
                      <span className="home-text154">
                        Use detailed analytics to make informed decisions, track
                        performance, and improve your Pinterest strategy.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="home-how-it-works">
          <div className="home-container48">
            <div className="home-container49">
              <img
                alt="pastedImage"
                src="https://i.ibb.co/Fhw3GPM/Lightbulb-Filament.png"
                className="home-icon25"
              />
              <span className="home-text155">How It Works</span>
            </div>
            <div className="home-title4">
              <span className="home-text156">
                <span>
                  Your Pinterest Partner for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text158">Success</span>
              </span>
              <p className="home-text159">
                Pinnr is your go-to partner, whether you&apos;re new to
                Pinterest or looking to optimize your content for better
                results.
              </p>
            </div>
          </div>
          <div className="home-centered-container1">
            <div className="home-category1">
              <div className="home-headng1">
                <span className="home-text160">1. Find Trends That Matter</span>
                <span className="home-text161">
                  <span>
                    Discover the latest Pinterest trends tailored to your niche.
                    Pinnr&apos;s AI identifies what’s trending, helping you stay
                    ahead of the competition.
                  </span>
                  <br></br>
                </span>
                <a
                  href="https://tally.so/r/mKvYlD"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link21"
                >
                  <div className="home-get-started5 template-button">
                    <span className="home-text164">Get started</span>
                  </div>
                </a>
              </div>
              <div className="home-container50"></div>
            </div>
            <div className="home-row">
              <div className="home-category2">
                <div className="home-headng2">
                  <span className="home-text165">2. Perfect Your Pins</span>
                  <span className="home-text166">
                    <span>
                      Upload your product photos and let Pinnr’s AI do the work.
                      Optimize visuals, craft SEO-friendly titles and
                      descriptions, and create captivating content effortlessly.
                    </span>
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
              </div>
              <div className="home-category3">
                <div className="home-headng3">
                  <span className="home-text169">3. Schedule and Grow</span>
                  <span className="home-text170">
                    Pin at the right time with Pinnr’s data-driven scheduling.
                    Track performance, gain actionable insights, and watch your
                    e-commerce brand thrive.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container51">
          <div id="why-pinnr?" className="home-container52">
            <div className="home-container53">
              <img
                alt="pastedImage"
                src="https://i.ibb.co/Xsr5Nhv/Magic-Wand.png"
                className="home-icon26"
              />
              <span className="home-text171">Why Pinnr?</span>
            </div>
            <div className="home-title5">
              <h2 className="home-text172 title">
                <span className="home-text173">Save</span>
                <span>
                  {' '}
                  Time,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text175">Increase</span>
                <span>
                  {' '}
                  Visibility,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text177">Drive</span>
                <span> Sales</span>
              </h2>
              <p className="home-text179">
                Automate tasks, optimize your content, and watch your brand grow
                on Pinterest.
              </p>
            </div>
          </div>
          <div className="home-container54">
            <div className="home-banner-manage3">
              <div className="home-container55">
                <div className="home-left5">
                  <div className="home-container56">
                    <img
                      alt="pastedImage"
                      src="https://i.ibb.co/xCw21Gy/Toolbox.png"
                      className="home-icon27"
                    />
                    <span className="home-text180">Effortless Growth</span>
                  </div>
                  <span className="home-text181 title">
                    <span>Tools Built for E-Commerce Success</span>
                    <br></br>
                  </span>
                  <span className="home-text184">
                    Pinnr simplifies your Pinterest marketing with AI tools that
                    discover trends, create engaging content, and optimize
                    visibility—helping your brand grow effortlessly and
                    effectively.
                  </span>
                  <a
                    href="https://tally.so/r/mKvYlD"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link22"
                  >
                    <div className="home-get-started6">
                      <span className="home-text185">Get Early Access</span>
                    </div>
                  </a>
                </div>
                <div className="home-image-container4">
                  <img
                    alt="pastedImage"
                    src="https://i.imgur.com/JLj6Qgs.png"
                    className="home-cards-image4"
                  />
                </div>
              </div>
            </div>
            <div className="home-banner2">
              <div className="home-container57">
                <div className="home-left6">
                  <div className="home-container58">
                    <img
                      alt="pastedImage"
                      src="https://i.ibb.co/QYzHLkJ/Hourglass-High.png"
                      className="home-icon28"
                    />
                    <span className="home-text186">Save Time</span>
                  </div>
                  <h2 className="home-text187 title">
                    Smart Solutions, Less Work
                  </h2>
                  <span className="home-text188">
                    Pinnr takes the hassle out of Pinterest marketing with
                    automated tools that handle analysis, content creation, and
                    scheduling, so you can save time and focus on your business
                    priorities.
                  </span>
                </div>
                <div className="home-image-container5">
                  <img
                    alt="pastedImage"
                    src="https://i.imgur.com/fcRSY9F.png"
                    className="home-cards-image5"
                  />
                </div>
              </div>
            </div>
            <div className="home-banner-manage4">
              <div className="home-container59">
                <div className="home-left7">
                  <div className="home-container60">
                    <img
                      alt="pastedImage"
                      src="https://i.ibb.co/ssp58v5/Trophy.png"
                      className="home-icon29"
                    />
                    <span className="home-text189">Success Simplified</span>
                  </div>
                  <h2 className="home-text190 title">
                    Turn Efforts into Real ROI
                  </h2>
                  <span className="home-text191">
                    With Pinnr, your efforts translate into measurable
                    results—more traffic, increased engagement, and better
                    sales—giving you the tools to achieve lasting success on
                    Pinterest.
                  </span>
                  <a
                    href="https://tally.so/r/mKvYlD"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link23"
                  >
                    <div className="home-get-started7">
                      <span className="home-text192">Get Early Access</span>
                    </div>
                  </a>
                </div>
                <div className="home-image-container6">
                  <img
                    alt="pastedImage"
                    src="https://i.imgur.com/Q4GP89C.png"
                    className="home-cards-image6"
                  />
                </div>
              </div>
            </div>
            <div className="home-banner-manage5">
              <div className="home-title6">
                <h2 className="home-text193 title">Why choose Pinnr?</h2>
                <p className="home-text194">
                  Pinnr saves time, boosts visibility, and drives sales with AI
                  tools, making Pinterest growth simple and effective.
                </p>
              </div>
              <div className="home-banner-manage6">
                <div className="home-category4">
                  <div className="home-headng4">
                    <span className="home-text195">
                      Your life without Pinnr 🙁 📉⏳
                    </span>
                    <div className="home-container61">
                      <span className="home-text196">
                        You’re unsure if your Pinterest efforts are truly moving
                        the needle for your business.
                      </span>
                      <div className="home-container62"></div>
                    </div>
                    <div className="home-container63">
                      <span className="home-text197">
                        You spend hours creating content, only to wonder if
                        it’ll even be seen or engaged with.
                      </span>
                      <div className="home-container64"></div>
                    </div>
                    <div className="home-container65">
                      <span className="home-text198">
                        You miss out on trending topics and fail to optimize
                        your pins for maximum reach.
                      </span>
                      <div className="home-container66"></div>
                    </div>
                    <div className="home-container67">
                      <span className="home-text199">
                        You don’t know the best time to post, leaving your
                        content to get lost in the feed.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-category5">
                  <div className="home-headng5">
                    <div className="home-category6"></div>
                    <span className="home-text200">
                      Your life with Pinnr 🙂 📈💡
                    </span>
                    <div className="home-container68">
                      <div className="home-container69">
                        <img
                          alt="pastedImage"
                          src="https://i.ibb.co/v1RjmQb/Caret-Right.png"
                          className="home-icon30"
                        />
                        <span className="home-text201">
                          Leverage real-time trend insights and optimize your
                          pins to reach the right audience at the right time.
                        </span>
                      </div>
                      <div className="home-container70"></div>
                    </div>
                    <div className="home-container71">
                      <div className="home-container72">
                        <img
                          alt="pastedImage"
                          src="https://i.ibb.co/v1RjmQb/Caret-Right.png"
                          className="home-icon31"
                        />
                        <span className="home-text202">
                          Create SEO-friendly titles, descriptions, and
                          optimized visuals in minutes with AI-powered tools.
                        </span>
                      </div>
                      <div className="home-container73"></div>
                    </div>
                    <div className="home-container74">
                      <div className="home-container75">
                        <img
                          alt="pastedImage"
                          src="https://i.ibb.co/v1RjmQb/Caret-Right.png"
                          className="home-icon32"
                        />
                        <span className="home-text203">
                          Boost engagement and visibility by effortlessly
                          tracking trends and adjusting your strategy.
                        </span>
                      </div>
                      <div className="home-container76"></div>
                    </div>
                    <div className="home-container77">
                      <div className="home-container78">
                        <img
                          alt="pastedImage"
                          src="https://i.ibb.co/v1RjmQb/Caret-Right.png"
                          className="home-icon33"
                        />
                        <span className="home-text204">
                          Save time and focus on growing your business with
                          automated pin scheduling and performance analytics.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="home-integrations">
          <div className="home-centered-container2">
            <div className="home-heading1">
              <span className="sub-title">Integrations</span>
              <span className="title">
                Integrated with the tools you know and love
              </span>
              <span className="home-text207">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
            </div>
            <div className="home-pills-container">
              <div className="home-pills">
                <div className="home-container79">
                  <YouTube></YouTube>
                  <YouTube pastedImageSrc="/logos/group%201012-200h.png"></YouTube>
                  <YouTube pastedImageSrc="/logos/layer1-200h.png"></YouTube>
                  <YouTube pastedImageSrc="/logos/group-200h.png"></YouTube>
                </div>
                <div className="home-container80">
                  <YouTube pastedImageSrc="/logos/pinterest%20logo-200h.png"></YouTube>
                  <YouTube pastedImageSrc="/logos/group%201014-200h.png"></YouTube>
                  <YouTube pastedImageSrc="/logos/group%201015-200h.png"></YouTube>
                  <YouTube pastedImageSrc="/logos/group%201017-200h.png"></YouTube>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-testimonals">
          <div className="home-left8">
            <span className="home-text208">Testimonals</span>
            <span className="home-text209 title">
              What people say about Active
            </span>
          </div>
          <div className="home-right2">
            <div className="home-column1">
              <Testimonal
                quote='"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
                avatarSrc="/image552912-e3yq-200h.png"
              ></Testimonal>
              <Testimonal
                from="Social Club"
                name="Jessica Smith"
                quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.\u2028 Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
                avatarSrc="/image312912-mvsg-200h.png"
              ></Testimonal>
              <Testimonal
                from="BeMe"
                name="Logan Boy"
                quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
                avatarSrc="/image502912-6wy-200h.png"
              ></Testimonal>
              <Testimonal
                from="Hello W."
                name="Laraine Summers"
                quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
                avatarSrc="/image202912-zekh-200h.png"
              ></Testimonal>
            </div>
            <div className="home-column2">
              <Testimonal
                from="Handsly"
                name="William McPau"
                quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
                avatarSrc="/image572912-0d3-200h.png"
              ></Testimonal>
              <Testimonal
                from="Share"
                name="Mariah Mae"
                quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                avatarSrc="/image632913-swij-200h.png"
              ></Testimonal>
              <Testimonal
                from="Gather"
                name="John Finati"
                quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
                avatarSrc="/image102913-x4z8-200h.png"
              ></Testimonal>
              <Testimonal
                from="Zigo"
                name="Mary Pau"
                quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
                avatarSrc="/image562913-ycff-200h.png"
              ></Testimonal>
            </div>
          </div>
          <span className="home-text210">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="home-action-bar">
          <div className="home-container81">
            <div className="home-container82">
              <img
                alt="pastedImage"
                src="https://i.ibb.co/4jf4KnJ/Star.png"
                className="home-icon34"
              />
              <span className="home-text213">Get Early Access</span>
            </div>
            <div className="home-title7">
              <h2 className="home-text214 title">
                <span>
                  Make
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text216">Pinterest work</span>
                <span>
                  {' '}
                  for your
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text218">business</span>
              </h2>
              <p className="home-text219">
                Transform your Pinterest game with tools that maximize
                visibility, engagement, and sales for your brand.
              </p>
            </div>
          </div>
          <div className="home-action">
            <div className="home-heading2">
              <h2 className="home-text220 title">Ready to get started?</h2>
              <a
                href="https://tally.so/r/mKvYlD"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link24"
              >
                <div className="home-get-started8 template-button">
                  <span className="home-text221">
                    <span>Get Early Access</span>
                    <br></br>
                  </span>
                </div>
              </a>
            </div>
            <div className="home-images"></div>
          </div>
        </section>
        <section className="home-faq">
          <div className="home-heading3">
            <span className="home-text224 title">
              Frequently asked questions
            </span>
            <span className="home-text225">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
          </div>
          <div className="home-accordion">
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header2">
                <span className="home-text226">
                  — What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text227">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="accordionContainer">
              <div className="home-header3">
                <span className="home-text228">
                  — Why is dolore magna aliqua excepteur sint
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text229">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header4">
                <span className="home-text230">
                  — Is excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text231">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header5">
                <span className="home-text232">
                  — Who quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text233">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header6">
                <span className="home-text234">
                  — Is minim veniam quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text235">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="home-container84">
              <Script
                html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
              ></Script>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-top">
            <div className="home-left9">
              <div className="home-contact">
                <span className="home-text236">Contact</span>
                <a
                  href="mailto:use@active-app.com?subject=Support"
                  className="home-link25"
                >
                  contact@pinnr.co
                </a>
              </div>
            </div>
            <div className="home-right3">
              <div className="home-category7">
                <span className="home-text237">Product</span>
                <div className="home-links3">
                  <a href="#features" className="home-link26">
                    Features
                  </a>
                  <a href="#how-it-works" className="home-link27">
                    How It Works
                  </a>
                  <a href="#why-pinnr?" className="home-link28">
                    Why Pinnr?
                  </a>
                  <span className="home-text238">Blog</span>
                </div>
              </div>
              <div className="home-category8">
                <span className="home-text239">Company</span>
                <div className="home-links4">
                  <Link href="/privacy-policy">
                    <a className="home-link29">Privacy Policy</a>
                  </Link>
                  <span className="home-text240">Terms of Service</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <img
              alt="pastedImage"
              src="https://i.ibb.co/ZfQ01mH/Logo.png"
              className="home-branding"
            />
            <span className="home-text241">Copyright © Active - 2025</span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 1000px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: 80px;
            padding-right: 80px;
            flex-direction: column;
            background-color: #fff0f2;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-mobile-navigation {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            z-index: 150;
            position: fixed;
            transform: translateX(100%);
            transition: transform 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-logo1 {
            width: 64px;
          }
          .home-links1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link10 {
            text-decoration: none;
          }
          .home-link11 {
            text-decoration: none;
          }
          .home-link12 {
            text-decoration: none;
          }
          .home-close-mobile-menu {
            top: var(--dl-space-space-oneandhalfunits);
            right: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .home-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .home-centered {
            gap: initial;
            width: 100%;
            display: flex;
            max-width: 1200px;
            box-sizing: initial;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: #fff0f2;
          }
          .home-left1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .home-link13 {
            display: contents;
          }
          .home-logo2 {
            width: 105px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .home-links2 {
            display: flex;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .home-link14 {
            text-decoration: none;
          }
          .home-link15 {
            text-decoration: none;
          }
          .home-link16 {
            text-decoration: none;
          }
          .home-right1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-burger-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-mobile-menu-button {
            width: 40px;
            height: 40px;
            display: none;
          }
          .home-link17 {
            display: contents;
          }
          .home-get-started1 {
            color: white;
            cursor: pointer;
            display: flex;
            margin-top: 0px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-300);
          }
          .home-get-started1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-danger-300);
          }
          .home-text102 {
            font-size: 18px;
          }
          .home-container12 {
            display: contents;
          }
          .home-container13 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-content1 {
            display: flex;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .home-text103 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 72px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 74px;
          }
          .home-text105 {
            color: var(--dl-color-primary-300);
          }
          .home-text107 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-link18 {
            display: contents;
          }
          .home-get-started2 {
            color: white;
            cursor: pointer;
            display: flex;
            margin-top: 40px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-primary-300);
          }
          .home-get-started2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-danger-300);
          }
          .home-text108 {
            font-size: 18px;
          }
          .home-image {
            width: 900px;
            height: auto;
            z-index: 10;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            user-select: none;
            border-radius: 0px;
            animation-name: zoomIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-container14 {
            width: 100%;
            display: flex;
            margin-top: 496px;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .home-container15 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container16 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            padding-top: 10px;
            border-color: #ebebeb;
            border-width: 1px;
            padding-left: 12px;
            border-radius: 12px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 12px;
            flex-direction: row;
            padding-bottom: 10px;
          }
          .home-icon12 {
            width: 20px;
            height: 20px;
          }
          .home-text109 {
            fill: var(--dl-color-danger-500);
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-weight: 600;
          }
          .home-title1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text110 {
            font-size: 56px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 72px;
          }
          .home-text112 {
            color: var(--dl-color-primary-300);
          }
          .home-text113 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-container17 {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .home-banner-manage1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: 80px;
            padding-right: 80px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container18 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left2 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-container19 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            padding-top: 10px;
            border-color: #ebebeb;
            border-width: 1px;
            padding-left: 12px;
            border-radius: 12px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 12px;
            flex-direction: row;
            padding-bottom: 10px;
          }
          .home-icon13 {
            width: 20px;
            height: 20px;
          }
          .home-text114 {
            fill: var(--dl-color-danger-500);
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-weight: 600;
          }
          .home-text115 {
            font-style: normal;
            text-align: left;
            font-weight: 600;
          }
          .home-text118 {
            color: rgb(0, 0, 0);
            line-height: 24px;
          }
          .home-link19 {
            display: contents;
          }
          .home-get-started3 {
            color: white;
            cursor: pointer;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-primary-300);
          }
          .home-get-started3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-danger-300);
          }
          .home-text119 {
            font-size: 18px;
          }
          .home-image-container1 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-cards-image1 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            user-select: none;
          }
          .home-banner1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: 80px;
            padding-right: 80px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container20 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .home-left3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-container21 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            padding-top: 10px;
            border-color: #ebebeb;
            border-width: 1px;
            padding-left: 12px;
            border-radius: 12px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 12px;
            flex-direction: row;
            padding-bottom: 10px;
          }
          .home-icon14 {
            width: 20px;
            height: 20px;
          }
          .home-text120 {
            fill: var(--dl-color-danger-500);
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-weight: 600;
          }
          .home-text121 {
            font-style: normal;
            text-align: left;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text122 {
            color: rgb(0, 0, 0);
          }
          .home-image-container2 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-cards-image2 {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .home-banner-manage2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: 80px;
            padding-right: 80px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container22 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-left4 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-container23 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            padding-top: 10px;
            border-color: #ebebeb;
            border-width: 1px;
            padding-left: 12px;
            border-radius: 12px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 12px;
            flex-direction: row;
            padding-bottom: 10px;
          }
          .home-icon15 {
            width: 20px;
            height: 20px;
          }
          .home-text123 {
            fill: var(--dl-color-danger-500);
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-weight: 600;
          }
          .home-text124 {
            font-style: normal;
            text-align: left;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text125 {
            color: rgb(0, 0, 0);
            line-height: 24px;
          }
          .home-link20 {
            display: contents;
          }
          .home-get-started4 {
            color: white;
            cursor: pointer;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-primary-300);
          }
          .home-get-started4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-danger-300);
          }
          .home-text126 {
            font-size: 18px;
          }
          .home-image-container3 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-cards-image3 {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .home-features1 {
            width: 100%;
            display: flex;
            z-index: 1;
            align-items: center;
            padding-top: 128px;
            padding-left: 80px;
            padding-right: 80px;
            flex-direction: column;
            padding-bottom: 128px;
          }
          .home-title2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text127 {
            font-size: 56px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 72px;
          }
          .home-text129 {
            color: var(--dl-color-primary-300);
          }
          .home-text132 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-cards1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .home-container24 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 0px;
            flex-direction: row;
          }
          .home-publish1 {
            height: 340px;
            padding-top: 40px;
            padding-left: 40px;
            padding-right: 40px;
            padding-bottom: 40px;
            background-color: #f7f7f7;
          }
          .home-icon16 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container25 {
            gap: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text133 {
            font-size: 28px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text134 {
            line-height: 24px;
          }
          .home-publish2 {
            gap: 0;
            height: 340px;
            padding-top: 40px;
            padding-left: 40px;
            padding-right: 40px;
            padding-bottom: 40px;
            background-color: #f7f7f7;
          }
          .home-icon17 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container26 {
            gap: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text135 {
            font-size: 28px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text136 {
            line-height: 24px;
          }
          .home-publish3 {
            height: 340px;
            padding-top: 40px;
            padding-left: 40px;
            padding-right: 40px;
            padding-bottom: 40px;
            background-color: #f7f7f7;
          }
          .home-icon18 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container27 {
            gap: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text137 {
            font-size: 28px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text138 {
            line-height: 24px;
          }
          .home-features2 {
            width: 100%;
            display: flex;
            z-index: 1;
            align-items: center;
            padding-top: 128px;
            padding-left: 80px;
            padding-right: 80px;
            flex-direction: column;
            padding-bottom: 128px;
          }
          .home-title3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text139 {
            font-size: 56px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 72px;
          }
          .home-text141 {
            color: var(--dl-color-primary-300);
          }
          .home-text142 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-cards2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .home-container28 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 0px;
            flex-direction: row;
          }
          .home-publish4 {
            height: 100%;
            padding: 32px;
            padding-top: 24px;
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            background-color: #f7f7f7;
          }
          .home-icon19 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container29 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container30 {
            gap: 0;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container31 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text143 {
            font-size: 28px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text144 {
            line-height: 24px;
          }
          .home-publish5 {
            height: 100%;
            padding: 32px;
            background-color: #f7f7f7;
          }
          .home-icon20 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container32 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container33 {
            gap: 0;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container34 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text145 {
            font-size: 28px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text146 {
            line-height: 24px;
          }
          .home-publish6 {
            height: 100%;
            padding: 32px;
            background-color: #f7f7f7;
          }
          .home-icon21 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container35 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container36 {
            gap: 0;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container37 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text147 {
            font-size: 28px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text148 {
            line-height: 24px;
          }
          .home-container38 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-bottom: 0px;
            flex-direction: row;
          }
          .home-publish7 {
            height: 100%;
            padding: 32px;
            background-color: #f7f7f7;
          }
          .home-pasted-image {
            width: auto;
            height: 247px;
            display: none;
            object-fit: contain;
            margin-bottom: 16px;
          }
          .home-icon22 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container39 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container40 {
            gap: 0;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container41 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text149 {
            font-size: 28px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text150 {
            line-height: 24px;
          }
          .home-publish8 {
            height: auto;
            padding: 32px;
            background-color: #f7f7f7;
          }
          .home-icon23 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container42 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container43 {
            gap: 0;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container44 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text151 {
            font-size: 28px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text152 {
            line-height: 24px;
          }
          .home-publish9 {
            height: 100%;
            padding: 32px;
            background-color: #f7f7f7;
          }
          .home-icon24 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container45 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container46 {
            gap: 0;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container47 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text153 {
            font-size: 28px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text154 {
            line-height: 24px;
          }
          .home-how-it-works {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 128px;
            padding-left: 80px;
            padding-right: 80px;
            flex-direction: column;
            padding-bottom: 128px;
          }
          .home-container48 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container49 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            padding-top: 10px;
            border-color: #ebebeb;
            border-width: 1px;
            padding-left: 12px;
            border-radius: 12px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 12px;
            flex-direction: row;
            padding-bottom: 10px;
          }
          .home-icon25 {
            width: 20px;
            height: 20px;
          }
          .home-text155 {
            fill: var(--dl-color-danger-500);
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-weight: 600;
          }
          .home-title4 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text156 {
            font-size: 56px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 72px;
          }
          .home-text158 {
            color: var(--dl-color-primary-300);
          }
          .home-text159 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-centered-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-category1 {
            color: white;
            width: 100%;
            display: flex;
            overflow: hidden;
            padding-left: var(--dl-space-space-fourunits);
            border-radius: 50px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: var(--dl-color-primary-300);
          }
          .home-headng1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text160 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text161 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .home-link21 {
            display: contents;
          }
          .home-get-started5 {
            margin-bottom: 0px;
            text-decoration: none;
          }
          .home-get-started5:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text164 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-container50 {
            flex: 1;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .home-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .home-category2 {
            flex: 1;
            color: white;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #eae9e9;
          }
          .home-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-text165 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text166 {
            color: #1e1e1e;
            line-height: 24px;
          }
          .home-category3 {
            flex: 1;
            color: white;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #000000;
          }
          .home-headng3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-text169 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text170 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .home-container51 {
            width: 100%;
            display: flex;
            margin-top: 128px;
            margin-bottom: 128px;
            flex-direction: column;
          }
          .home-container52 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container53 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            padding-top: 10px;
            border-color: #ebebeb;
            border-width: 1px;
            padding-left: 12px;
            border-radius: 12px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 12px;
            flex-direction: row;
            padding-bottom: 10px;
          }
          .home-icon26 {
            width: 20px;
            height: 20px;
          }
          .home-text171 {
            fill: var(--dl-color-danger-500);
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-weight: 600;
          }
          .home-title5 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text172 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            margin-bottom: 0px;
          }
          .home-text173 {
            color: var(--dl-color-primary-300);
          }
          .home-text175 {
            color: var(--dl-color-primary-300);
          }
          .home-text177 {
            color: var(--dl-color-primary-300);
          }
          .home-text179 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-container54 {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .home-banner-manage3 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: 80px;
            padding-right: 80px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container55 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left5 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-container56 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            padding-top: 10px;
            border-color: #ebebeb;
            border-width: 1px;
            padding-left: 12px;
            border-radius: 12px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 12px;
            flex-direction: row;
            padding-bottom: 10px;
          }
          .home-icon27 {
            width: 20px;
            height: 20px;
          }
          .home-text180 {
            fill: var(--dl-color-danger-500);
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-weight: 600;
          }
          .home-text181 {
            font-style: normal;
            text-align: left;
            font-weight: 600;
          }
          .home-text184 {
            color: rgb(0, 0, 0);
          }
          .home-link22 {
            display: contents;
          }
          .home-get-started6 {
            color: white;
            cursor: pointer;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-primary-300);
          }
          .home-get-started6:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-danger-300);
          }
          .home-text185 {
            font-size: 18px;
          }
          .home-image-container4 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-cards-image4 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            user-select: none;
          }
          .home-banner2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: 80px;
            padding-right: 80px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container57 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .home-left6 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-container58 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            padding-top: 10px;
            border-color: #ebebeb;
            border-width: 1px;
            padding-left: 12px;
            border-radius: 12px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 12px;
            flex-direction: row;
            padding-bottom: 10px;
          }
          .home-icon28 {
            width: 20px;
            height: 20px;
          }
          .home-text186 {
            fill: var(--dl-color-danger-500);
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-weight: 600;
          }
          .home-text187 {
            font-style: normal;
            text-align: left;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text188 {
            color: rgb(0, 0, 0);
          }
          .home-image-container5 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-cards-image5 {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .home-banner-manage4 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: 80px;
            padding-right: 80px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container59 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-left7 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-container60 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            padding-top: 10px;
            border-color: #ebebeb;
            border-width: 1px;
            padding-left: 12px;
            border-radius: 12px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 12px;
            flex-direction: row;
            padding-bottom: 10px;
          }
          .home-icon29 {
            width: 20px;
            height: 20px;
          }
          .home-text189 {
            fill: var(--dl-color-danger-500);
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-weight: 600;
          }
          .home-text190 {
            font-style: normal;
            text-align: left;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text191 {
            color: rgb(0, 0, 0);
          }
          .home-link23 {
            display: contents;
          }
          .home-get-started7 {
            color: white;
            cursor: pointer;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-primary-300);
          }
          .home-get-started7:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-danger-300);
          }
          .home-text192 {
            font-size: 18px;
          }
          .home-image-container6 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-cards-image6 {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .home-banner-manage5 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 80px;
            padding-right: 80px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
          }
          .home-title6 {
            display: flex;
            align-items: center;
            margin-bottom: 80px;
            flex-direction: column;
          }
          .home-text193 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-style: normal;
            text-align: center;
            font-weight: 600;
            margin-bottom: 0px;
          }
          .home-text194 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-banner-manage6 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: center;
          }
          .home-category4 {
            flex: 1;
            color: white;
            height: 530px;
            display: flex;
            overflow: hidden;
            max-width: 450px;
            align-items: flex-end;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: 24px;
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 0px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-headng4 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home-text195 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 32px;
          }
          .home-container61 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text196 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            line-height: 24px;
          }
          .home-container62 {
            flex: 0 0 auto;
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 0.5px;
            margin-bottom: 16px;
          }
          .home-container63 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text197 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            line-height: 24px;
          }
          .home-container64 {
            flex: 0 0 auto;
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 0.5px;
            margin-bottom: 16px;
          }
          .home-container65 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text198 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            line-height: 24px;
          }
          .home-container66 {
            flex: 0 0 auto;
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 0.5px;
            margin-bottom: 16px;
          }
          .home-container67 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text199 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            line-height: 24px;
          }
          .home-category5 {
            flex: 1;
            color: white;
            height: 615px;
            display: flex;
            overflow: hidden;
            max-width: 480px;
            align-items: flex-end;
            border-radius: 24px;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-primary-300);
          }
          .home-headng5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 40px;
            padding-left: 40px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home-category6 {
            flex: 1;
            color: white;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 655px;
            display: flex;
            overflow: hidden;
            max-width: 480px;
            align-items: flex-end;
            border-radius: 24px;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-primary-300);
          }
          .home-text200 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 32px;
          }
          .home-container68 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container69 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon30 {
            width: 20px;
            height: 20px;
            align-self: flex-start;
            margin-right: 8px;
            margin-bottom: 0px;
          }
          .home-text201 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            line-height: 24px;
          }
          .home-container70 {
            flex: 0 0 auto;
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 0.5px;
            margin-bottom: 16px;
          }
          .home-container71 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container72 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon31 {
            width: 20px;
            height: 20px;
            align-self: flex-start;
            margin-right: 8px;
            margin-bottom: 0px;
          }
          .home-text202 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            line-height: 24px;
          }
          .home-container73 {
            flex: 0 0 auto;
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 0.5px;
            margin-bottom: 16px;
          }
          .home-container74 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container75 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon32 {
            width: 20px;
            height: 20px;
            align-self: flex-start;
            margin-right: 8px;
            margin-bottom: 0px;
          }
          .home-text203 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            line-height: 24px;
          }
          .home-container76 {
            flex: 0 0 auto;
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: 16px;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 0.5px;
            margin-bottom: 16px;
          }
          .home-container77 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container78 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon33 {
            width: 20px;
            height: 20px;
            align-self: flex-start;
            margin-right: 8px;
            margin-bottom: 0px;
          }
          .home-text204 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            line-height: 24px;
          }
          .home-integrations {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-sevenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .home-centered-container2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text207 {
            color: rgb(0, 0, 0);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pills {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-container79 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .home-container80 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-testimonals {
            width: 100%;
            display: none;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-left8 {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text208 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text209 {
            text-align: left;
          }
          .home-right2 {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .home-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .home-column2 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .home-text210 {
            cursor: pointer;
            display: none;
          }
          .home-action-bar {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 128px;
            padding-left: 80px;
            padding-right: 80px;
            flex-direction: column;
            padding-bottom: 128px;
            justify-content: center;
          }
          .home-container81 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container82 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            padding-top: 10px;
            border-color: #ebebeb;
            border-width: 1px;
            padding-left: 12px;
            border-radius: 12px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 12px;
            flex-direction: row;
            padding-bottom: 10px;
          }
          .home-icon34 {
            width: 20px;
            height: 20px;
          }
          .home-text213 {
            fill: var(--dl-color-danger-500);
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-weight: 600;
          }
          .home-title7 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text214 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            margin-bottom: 0px;
          }
          .home-text216 {
            color: var(--dl-color-primary-300);
          }
          .home-text218 {
            color: var(--dl-color-primary-300);
          }
          .home-text219 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-primary-300);
          }
          .home-heading2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .home-text220 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            max-width: 600px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-link24 {
            display: contents;
          }
          .home-get-started8 {
            align-self: center;
            margin-bottom: 0px;
            text-decoration: none;
          }
          .home-text221 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-images {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-faq {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #eff0f2;
          }
          .home-heading3 {
            width: 100%;
            display: flex;
            align-items: center;
            user-select: none;
            flex-direction: column;
          }
          .home-text224 {
            text-align: center;
          }
          .home-text225 {
            color: rgb(0, 0, 0);
            width: 100%;
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-accordion {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text226 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text227 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text228 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text229 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header4 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text230 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text231 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header5 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text232 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text233 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header6 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text234 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text235 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-container84 {
            display: contents;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
            background-color: #000000;
          }
          .home-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-left9 {
            width: 33%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-contact {
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text236 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-link25 {
            color: rgb(196, 196, 196);
          }
          .home-right3 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-category7 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text237 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link26 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-link27 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-link28 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-text238 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-category8 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text239 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link29 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-text240 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .home-branding {
            width: var(--dl-size-size-large);
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text241 {
            color: rgb(104, 104, 104);
          }
          @media (max-width: 1200px) {
            .home-container13 {
              margin-top: 128px;
            }
            .home-content1 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-container14 {
              margin-top: 0px;
              padding-top: 496px;
            }
            .home-text158 {
              color: var(--dl-color-primary-300);
            }
            .home-text159 {
              color: var(--dl-color-gray-500);
            }
            .home-text160 {
              font-size: 32px;
            }
            .home-text161 {
              color: rgb(238, 233, 254);
            }
            .home-text165 {
              color: rgb(0, 0, 0);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
            }
            .home-text166 {
              color: rgb(30, 30, 30);
            }
            .home-text169 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
            }
            .home-text170 {
              color: rgb(238, 233, 254);
            }
            .home-text195 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
            }
            .home-text196 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
            }
            .home-text197 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
            }
            .home-text198 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
            }
            .home-text199 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
            }
            .home-text200 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
            }
            .home-text201 {
              color: rgb(238, 233, 254);
            }
            .home-text202 {
              color: rgb(238, 233, 254);
            }
            .home-text203 {
              color: rgb(238, 233, 254);
            }
            .home-text204 {
              color: rgb(238, 233, 254);
            }
            .home-heading2 {
              padding-top: 80px;
              padding-left: 40px;
              padding-bottom: 80px;
            }
            .home-text237 {
              color: rgb(255, 255, 255);
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            }
            .home-link26 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .home-link27 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .home-link28 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .home-text238 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .home-link29 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .home-text240 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              gap: var(--dl-space-space-fiveunits);
              padding-top: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .home-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .home-left1 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-logo2 {
              width: 64px;
            }
            .home-links2 {
              display: none;
            }
            .home-right1 {
              width: 40;
            }
            .home-mobile-menu-button {
              display: flex;
            }
            .home-get-started1 {
              visibility: hidden;
              border-collapse: collapse;
            }
            .home-container13 {
              gap: var(--dl-space-space-threeunits);
              margin-top: 0;
            }
            .home-content1 {
              width: 100%;
              max-width: 1200px;
              margin-top: 0px;
            }
            .home-text103 {
              max-width: 850px;
            }
            .home-image {
              width: 100%;
              border-radius: 44px;
            }
            .home-container14 {
              margin-top: 450px;
              padding-top: 0px;
            }
            .home-title1 {
              width: 100%;
              max-width: 1200px;
            }
            .home-text110 {
              font-size: 36px;
              font-style: normal;
              font-weight: 600;
              line-height: 40px;
            }
            .home-text113 {
              color: var(--dl-color-gray-500);
              font-size: 20px;
              line-height: 30px;
            }
            .home-banner-manage1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 48px;
              padding-right: 48px;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-left2 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .home-cards-image1 {
              width: 360px;
            }
            .home-banner1 {
              padding-left: 48px;
              padding-right: 48px;
            }
            .home-banner-manage2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 48px;
              padding-right: 48px;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-features1 {
              padding-top: 96px;
              padding-left: 48px;
              padding-right: 48px;
              padding-bottom: 96px;
            }
            .home-title2 {
              width: 100%;
              max-width: 1200px;
            }
            .home-text127 {
              font-size: 36px;
              font-style: normal;
              font-weight: 600;
              line-height: 40px;
            }
            .home-cards1 {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-container24 {
              flex-direction: column;
            }
            .home-container25 {
              align-items: flex-start;
            }
            .home-text134 {
              line-height: 21px;
            }
            .home-container26 {
              align-items: flex-start;
            }
            .home-text136 {
              line-height: 21px;
            }
            .home-container27 {
              align-items: flex-start;
            }
            .home-text138 {
              line-height: 21px;
            }
            .home-features2 {
              padding-top: 96px;
              padding-left: 48px;
              padding-right: 48px;
              padding-bottom: 96px;
            }
            .home-title3 {
              width: 100%;
              max-width: 1200px;
            }
            .home-text139 {
              font-size: 36px;
              font-style: normal;
              font-weight: 600;
              line-height: 40px;
            }
            .home-cards2 {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-container28 {
              flex-direction: column;
            }
            .home-container30 {
              align-items: flex-start;
            }
            .home-text144 {
              line-height: 21px;
            }
            .home-container33 {
              align-items: flex-start;
            }
            .home-text146 {
              line-height: 21px;
            }
            .home-container36 {
              align-items: flex-start;
            }
            .home-text148 {
              line-height: 21px;
            }
            .home-container38 {
              flex-direction: column;
            }
            .home-container40 {
              align-items: flex-start;
            }
            .home-text150 {
              line-height: 21px;
            }
            .home-container43 {
              align-items: flex-start;
            }
            .home-text152 {
              line-height: 21px;
            }
            .home-container46 {
              align-items: flex-start;
            }
            .home-text154 {
              line-height: 21px;
            }
            .home-how-it-works {
              padding-top: 96px;
              padding-left: 48px;
              padding-bottom: 96px;
            }
            .home-title4 {
              width: 100%;
              max-width: 1200px;
            }
            .home-text156 {
              font-size: 36px;
              font-style: normal;
              font-weight: 600;
              line-height: 40px;
            }
            .home-category1 {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-headng1 {
              margin-left: var(--dl-space-space-fourunits);
            }
            .home-container50 {
              width: 100%;
            }
            .home-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-headng3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-container51 {
              margin-top: 96px;
              margin-bottom: 96px;
            }
            .home-title5 {
              width: 100%;
              max-width: 1200px;
            }
            .home-banner-manage3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 48px;
              padding-right: 48px;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-left5 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .home-cards-image4 {
              width: 360px;
            }
            .home-banner2 {
              padding-left: 48px;
              padding-right: 48px;
            }
            .home-banner-manage4 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 48px;
              padding-right: 48px;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-banner-manage5 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 48px;
              padding-right: 48px;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-title6 {
              width: 100%;
              max-width: 1200px;
            }
            .home-banner-manage6 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 48px;
              padding-right: 48px;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-headng4 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 40px;
            }
            .home-headng5 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 40px;
            }
            .home-container80 {
              margin-left: 0px;
            }
            .home-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .home-left8 {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .home-text209 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-right2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .home-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-column2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-action-bar {
              padding-top: 96px;
              padding-left: 48px;
              padding-right: 48px;
              padding-bottom: 96px;
            }
            .home-title7 {
              width: 100%;
              max-width: 1200px;
            }
            .home-action {
              flex-direction: column;
            }
            .home-heading2 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-accordion {
              width: 100%;
              max-width: 1200px;
            }
            .home-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .home-top {
              flex-direction: column;
            }
            .home-left9 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text236 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link25 {
              text-decoration: underline none;
            }
            .home-right3 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-links3 {
              gap: var(--dl-space-space-unit);
            }
            .home-links4 {
              gap: var(--dl-space-space-unit);
            }
            .home-branding {
              width: var(--dl-size-size-medium);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text241 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              gap: 0;
              height: 620px;
              position: relative;
              padding-bottom: 0px;
            }
            .home-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-left1 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-right1 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-get-started1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-container13 {
              margin-top: 0;
            }
            .home-content1 {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-text103 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              font-size: 48;
              max-width: 700;
              font-style: normal;
              font-weight: 600;
              line-height: 36px;
            }
            .home-text107 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 16px;
              max-width: 500;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-get-started2 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-image {
              width: 100%;
              box-shadow: 0px 7.49px 37.47px -1.87px #d4d4d4;
              border-radius: var(--dl-radius-radius-radius4);
              border-top-left-radius: 40;
              border-top-right-radius: 40;
            }
            .home-container14 {
              margin-top: 480;
            }
            .home-text110 {
              font-size: 36px;
              max-width: 600;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .home-text113 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 16px;
              max-width: 450;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-banner-manage1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container18 {
              flex-direction: column;
            }
            .home-left2 {
              margin-right: 0px;
            }
            .home-text115 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text118 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-get-started3 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-image-container1 {
              justify-content: center;
            }
            .home-cards-image1 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container20 {
              flex-direction: column;
            }
            .home-left3 {
              margin-right: 0px;
            }
            .home-banner-manage2 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container22 {
              flex-direction: column;
            }
            .home-left4 {
              margin-right: 0px;
            }
            .home-get-started4 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-features1 {
              padding-top: 96px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text127 {
              font-size: 36px;
              max-width: 600;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .home-text132 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 16px;
              max-width: 450;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-container24 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-publish1 {
              margin-left: 0px;
            }
            .home-text133 {
              font-size: 24px;
            }
            .home-text134 {
              font-size: 14px;
            }
            .home-publish2 {
              margin-left: 0px;
            }
            .home-text135 {
              font-size: 24px;
            }
            .home-text136 {
              font-size: 14px;
            }
            .home-publish3 {
              margin-left: 0px;
            }
            .home-text137 {
              font-size: 24px;
            }
            .home-text138 {
              font-size: 14px;
            }
            .home-features2 {
              padding-top: 96px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text139 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .home-text142 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 16px;
              max-width: 450;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-container28 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-publish4 {
              margin-left: 0px;
            }
            .home-text143 {
              font-size: 24px;
            }
            .home-text144 {
              font-size: 14px;
            }
            .home-publish5 {
              margin-left: 0px;
            }
            .home-text145 {
              font-size: 24px;
            }
            .home-text146 {
              font-size: 14px;
            }
            .home-publish6 {
              margin-left: 0px;
            }
            .home-text147 {
              font-size: 24px;
            }
            .home-text148 {
              font-size: 14px;
            }
            .home-container38 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-publish7 {
              margin-left: 0px;
            }
            .home-text149 {
              font-size: 24px;
            }
            .home-text150 {
              font-size: 14px;
            }
            .home-publish8 {
              margin-left: 0px;
            }
            .home-text151 {
              font-size: 24px;
            }
            .home-text152 {
              font-size: 14px;
            }
            .home-publish9 {
              margin-left: 0px;
            }
            .home-text153 {
              font-size: 24px;
            }
            .home-text154 {
              font-size: 14px;
            }
            .home-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text156 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .home-text159 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-headng1 {
              padding-bottom: 0px;
            }
            .home-get-started5 {
              display: none;
            }
            .home-container50 {
              width: 100%;
            }
            .home-row {
              height: auto;
              flex-direction: column;
            }
            .home-text179 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 16px;
              max-width: 450;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-banner-manage3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container55 {
              flex-direction: column;
            }
            .home-left5 {
              margin-right: 0px;
            }
            .home-text181 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text184 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-get-started6 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-image-container4 {
              justify-content: center;
            }
            .home-cards-image4 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-banner2 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container57 {
              flex-direction: column;
            }
            .home-left6 {
              margin-right: 0px;
            }
            .home-banner-manage4 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container59 {
              flex-direction: column;
            }
            .home-left7 {
              margin-right: 0px;
            }
            .home-get-started7 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-banner-manage5 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text194 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-banner-manage6 {
              align-self: center;
              padding-top: var(--dl-space-space-fourunits);
              flex-direction: inherit;
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-category4 {
              max-width: 100%;
              border-color: var(--dl-color-gray-700);
              border-radius: 24px;
              margin-bottom: 24px;
              border-right-width: 1px;
              border-top-right-radius: 24;
              border-bottom-right-radius: 24;
            }
            .home-headng4 {
              width: auto;
              align-self: center;
              padding-top: 40px;
              padding-left: 40px;
              padding-right: 40px;
              padding-bottom: 40;
            }
            .home-category5 {
              max-width: 100%;
            }
            .home-headng5 {
              width: 100%;
              padding-bottom: 40;
            }
            .home-integrations {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text207 {
              line-height: 24px;
            }
            .home-pills {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .home-right2 {
              width: 100%;
              flex-direction: column;
            }
            .home-column2 {
              display: none;
            }
            .home-text210 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .home-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text219 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 16px;
              max-width: 450;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-action {
              align-items: center;
            }
            .home-heading2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text221 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .home-images {
              justify-content: center;
            }
            .home-faq {
              padding: var(--dl-space-space-fourunits);
            }
            .home-heading3 {
              width: 100%;
            }
            .home-text224 {
              font-size: 36px;
              line-height: 36px;
            }
            .home-text225 {
              width: 100%;
              max-width: 600p;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-left: 40px;
              padding-right: 40px;
              padding-bottom: 0px;
            }
            .home-logo1 {
              margin-left: 0px;
            }
            .home-icon10 {
              align-items: center;
              justify-content: center;
            }
            .home-get-started1 {
              width: 100%;
              opacity: 1;
              overflow: visible;
            }
            .home-container13 {
              margin-top: 48px;
            }
            .home-content1 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-text103 {
              font-size: 38px;
            }
            .home-text107 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
            }
            .home-get-started2 {
              width: 100%;
            }
            .home-container14 {
              margin-top: 156px;
            }
            .home-title1 {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: 40px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 40px;
            }
            .home-text110 {
              font-size: 36px;
              font-weight: 700;
              line-height: 40px;
            }
            .home-text112 {
              color: var(--dl-color-primary-300);
            }
            .home-text113 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
            }
            .home-container17 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-banner-manage1 {
              padding-left: 40px;
              padding-right: 40px;
            }
            .home-text118 {
              line-height: 24px;
            }
            .home-get-started3 {
              width: 100%;
            }
            .home-cards-image1 {
              width: 100%;
              margin-top: var(--dl-space-space-twounits);
            }
            .home-banner1 {
              padding-left: 40px;
              padding-right: 40px;
            }
            .home-left3 {
              margin-left: 0px;
            }
            .home-text121 {
              font-style: normal;
              font-weight: 600;
            }
            .home-banner-manage2 {
              padding-left: 40px;
              padding-right: 40px;
            }
            .home-text124 {
              font-style: normal;
              font-weight: 600;
            }
            .home-get-started4 {
              width: 100%;
            }
            .home-features1 {
              padding-top: 64px;
              padding-left: 40px;
              padding-right: 40px;
              padding-bottom: 64px;
            }
            .home-text132 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
            }
            .home-cards1 {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container24 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-features2 {
              padding-top: 64px;
              padding-left: 40px;
              padding-right: 40px;
              padding-bottom: 64px;
            }
            .home-text142 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
            }
            .home-cards2 {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container28 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container38 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-how-it-works {
              padding-left: 40px;
              padding-right: 40px;
            }
            .home-text159 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
            }
            .home-category1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-headng1 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-headng2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-headng3 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container51 {
              gap: 120;
              margin-top: 64px;
              margin-bottom: 64px;
            }
            .home-container52 {
              padding-left: 40px;
              padding-right: 40px;
            }
            .home-title5 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text172 {
              font-style: normal;
              font-weight: 600;
            }
            .home-text179 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
            }
            .home-container54 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-banner-manage3 {
              padding-left: 40px;
              padding-right: 40px;
            }
            .home-text184 {
              line-height: 24px;
            }
            .home-get-started6 {
              width: 100%;
            }
            .home-cards-image4 {
              width: 100%;
              margin-top: var(--dl-space-space-twounits);
            }
            .home-banner2 {
              padding-left: 40px;
              padding-right: 40px;
            }
            .home-left6 {
              margin-left: 0px;
            }
            .home-text187 {
              font-style: normal;
              font-weight: 600;
            }
            .home-banner-manage4 {
              padding-left: 40px;
              padding-right: 40px;
            }
            .home-text190 {
              font-style: normal;
              font-weight: 600;
            }
            .home-get-started7 {
              width: 100%;
            }
            .home-banner-manage5 {
              padding-left: 40px;
              padding-right: 40px;
            }
            .home-title6 {
              margin-bottom: 0px;
            }
            .home-text193 {
              font-style: normal;
              font-weight: 600;
            }
            .home-text194 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
            }
            .home-banner-manage6 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-headng4 {
              height: 100%;
              padding-bottom: 40px;
            }
            .home-text196 {
              color: var(--dl-color-gray-black);
              line-height: 24px;
            }
            .home-text197 {
              color: var(--dl-color-gray-black);
              line-height: 24px;
            }
            .home-text198 {
              color: var(--dl-color-gray-black);
              line-height: 24px;
            }
            .home-text199 {
              color: var(--dl-color-gray-black);
              line-height: 24px;
            }
            .home-headng5 {
              padding-top: 40px;
              padding-left: 40px;
              padding-right: 40px;
              padding-bottom: 40px;
            }
            .home-text201 {
              color: rgb(238, 233, 254);
              line-height: 24px;
            }
            .home-text202 {
              color: rgb(238, 233, 254);
              line-height: 24px;
            }
            .home-text203 {
              color: rgb(238, 233, 254);
              line-height: 24px;
            }
            .home-text204 {
              color: rgb(238, 233, 254);
              line-height: 24px;
            }
            .home-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-container81 {
              padding-left: 40px;
              padding-right: 40px;
            }
            .home-title7 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text214 {
              font-style: normal;
              font-weight: 600;
            }
            .home-text219 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
            }
            .home-text220 {
              font-style: normal;
              font-weight: 600;
            }
            .home-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
