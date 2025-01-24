import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const PrivacyPolicy = (props) => {
  return (
    <>
      <div className="privacy-policy-container10">
        <Head>
          <title>Privacy-Policy - Pinnr Landing</title>
          <meta property="og:title" content="Privacy-Policy - Pinnr Landing" />
        </Head>
        <header className="privacy-policy-header">
          <div id="mobile-menu" className="privacy-policy-mobile-navigation">
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className="privacy-policy-logo1"
            />
            <div className="privacy-policy-links1">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div
              id="close-mobile-menu"
              className="privacy-policy-close-mobile-menu"
            >
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="privacy-policy-icon1"
              >
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="privacy-policy-desktop-navigation">
            <nav className="privacy-policy-centered">
              <div className="privacy-policy-left1">
                <Link href="/">
                  <a className="privacy-policy-link1">
                    <img
                      alt="pastedImage"
                      src="https://i.ibb.co/ZfQ01mH/Logo.png"
                      className="privacy-policy-logo2"
                    />
                  </a>
                </Link>
                <div className="privacy-policy-links2">
                  <span className="Link">Features</span>
                  <span className="Link">How it works</span>
                  <span className="Link">Why Pinnr?</span>
                  <span className="Link">Blog</span>
                </div>
              </div>
              <div className="privacy-policy-right1">
                <div
                  id="open-mobile-menu"
                  className="privacy-policy-burger-menu"
                >
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="privacy-policy-mobile-menu-button"
                  />
                </div>
                <a
                  href="https://tally.so/r/mKvYlD"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="privacy-policy-link2"
                >
                  <div className="privacy-policy-get-started">
                    <span className="privacy-policy-text17">
                      Get Early Access
                    </span>
                  </div>
                </a>
              </div>
            </nav>
          </div>
          <div>
            <div className="privacy-policy-container12">
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
        <div className="privacy-policy-container13 thq-section-padding">
          <div className="privacy-policy-max-width thq-section-max-width thq-flex-column">
            <div className="privacy-policy-content thq-flex-column">
              <ul>
                <li className="privacy-policy-li thq-flex-column list-item">
                  <div className="privacy-policy-container14">
                    <h2 className="privacy-policy-text18 title">
                      Privacy Policy for Pinnr
                    </h2>
                    <label className="privacy-policy-text19">
                      At Pinnr, we value your privacy and are committed to
                      protecting your personal information. This Privacy Policy
                      outlines the types of information we collect, how we use
                      it, and how we protect it. By using our services, you
                      agree to the collection and use of information in
                      accordance with this policy.
                    </label>
                    <div className="privacy-policy-container15">
                      <img
                        alt="pastedImage"
                        src="https://framerusercontent.com/images/W2vgyCbrvaYd7MTunbTSsSMGGM.svg"
                        className="privacy-policy-icon3"
                      />
                      <span className="privacy-policy-text20">
                        <span className="privacy-policy-text21">
                          Last Updated on January, 05, 2025
                        </span>
                        <br className="privacy-policy-text22"></br>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="privacy-policy-container16">
              <div className="privacy-policy-container17">
                <h2 className="privacy-policy-text23 title">
                  Information We Collect
                </h2>
                <span className="privacy-policy-text24">
                  We collect two types of information:
                </span>
                <span className="privacy-policy-text25">
                  <span className="privacy-policy-text26">
                    Personal Information: This includes information such as your
                    name, email address, phone number, and other personal
                    details you provide when signing up for our services or
                    joining the waitlist.
                  </span>
                  <br className="privacy-policy-text27"></br>
                  <br className="privacy-policy-text28"></br>
                  <span className="privacy-policy-text29">
                    Non-Personal Information: We collect data about your use of
                    our platform, including but not limited to device
                    information, IP addresses, browser types, and usage data to
                    improve our services.
                  </span>
                </span>
              </div>
              <div className="privacy-policy-container18">
                <h2 className="privacy-policy-text30 title">
                  How We Use Your Information
                </h2>
                <span className="privacy-policy-text31">
                  We use your information to:
                </span>
                <span className="privacy-policy-text32">
                  <span>Provide and improve our services.</span>
                  <br className="privacy-policy-text34"></br>
                  <br className="privacy-policy-text35"></br>
                  <span>
                    Communicate with you about updates, features, and promotions
                    related to Pinnr.
                  </span>
                  <br className="privacy-policy-text37"></br>
                  <br className="privacy-policy-text38"></br>
                  <span>
                    Respond to your inquiries and provide customer support.
                  </span>
                  <br className="privacy-policy-text40"></br>
                  <br className="privacy-policy-text41"></br>
                  <span>Personalize your experience on our platform.</span>
                  <br className="privacy-policy-text43"></br>
                  <br className="privacy-policy-text44"></br>
                  <span>Comply with legal obligations.</span>
                </span>
              </div>
              <div className="privacy-policy-container19">
                <h2 className="privacy-policy-text46 title">
                  Sharing Your Informations
                </h2>
                <span className="privacy-policy-text47">
                  <span>
                    We will never sell, rent, or trade your personal
                    information. We may share your information with third
                    parties in the following circumstances:
                  </span>
                  <br></br>
                </span>
                <span className="privacy-policy-text50">
                  <span>
                    Service Providers: We may share information with trusted
                    third-party service providers who help us operate the
                    platform and deliver our services.
                  </span>
                  <br className="privacy-policy-text52"></br>
                  <br></br>
                  <span>
                    Legal Requirements: If required by law, we may disclose your
                    information to comply with legal processes or governmental
                    requests.
                  </span>
                </span>
              </div>
              <div className="privacy-policy-container20">
                <h2 className="privacy-policy-text55 title">Data Security</h2>
                <span className="privacy-policy-text56">
                  <span>
                    We implement a variety of security measures to maintain the
                    safety of your personal information. However, please
                    remember that no data transmission over the internet is 100%
                    secure. While we strive to protect your information, we
                    cannot guarantee its absolute security.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="privacy-policy-container21">
                <h2 className="privacy-policy-text59 title">Cookies</h2>
                <span className="privacy-policy-text60">
                  <span>
                    We use cookies and similar technologies to enhance your
                    experience on our website. Cookies are small data files
                    stored on your device that help us improve functionality,
                    analyze usage patterns, and personalize content. You can
                    manage your cookie preferences through your browser
                    settings.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="privacy-policy-container22">
                <h2 className="privacy-policy-text63 title">Your Rights</h2>
                <span className="privacy-policy-text64">
                  <span>
                    Depending on your location, you may have certain rights
                    regarding your personal information, including the right to
                    access, correct, delete, or restrict the use of your data.
                    If you wish to exercise any of these rights, please contact
                    us at support@pinnr.co.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="privacy-policy-container23">
                <h2 className="privacy-policy-text67 title">
                  Changes to This Policy
                </h2>
                <span className="privacy-policy-text68">
                  <span>
                    We reserve the right to update this Privacy Policy at any
                    time. Any changes will be posted on this page with the
                    updated date. We encourage you to review this policy
                    periodically to stay informed about how we are protecting
                    your information.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="privacy-policy-container24">
                <h2 className="privacy-policy-text71 title">Contact Us</h2>
                <span className="privacy-policy-text72">
                  <span>
                    If you have any questions or concerns about this Privacy
                    Policy or how we handle your data, please contact us at:
                    support@pinnr.co
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <footer className="privacy-policy-footer">
          <div className="privacy-policy-top">
            <div className="privacy-policy-left2">
              <div className="privacy-policy-contact">
                <span className="privacy-policy-text75">Contact</span>
                <a
                  href="mailto:use@active-app.com?subject=Support"
                  className="privacy-policy-link3"
                >
                  contact@pinnr.co
                </a>
              </div>
            </div>
            <div className="privacy-policy-right2">
              <div className="privacy-policy-category1">
                <span className="privacy-policy-text76">Product</span>
                <div className="privacy-policy-links3">
                  <a href="#features" className="privacy-policy-link4">
                    Features
                  </a>
                  <a href="#how-it-works" className="privacy-policy-link5">
                    How It Works
                  </a>
                  <a href="#why-pinnr?" className="privacy-policy-link6">
                    Why Pinnr?
                  </a>
                  <span className="privacy-policy-text77">Blog</span>
                </div>
              </div>
              <div className="privacy-policy-category2">
                <span className="privacy-policy-text78">Company</span>
                <div className="privacy-policy-links4">
                  <Link href="/privacy-policy">
                    <a className="privacy-policy-link7">Privacy Policy</a>
                  </Link>
                  <span className="privacy-policy-text79">
                    Terms of Service
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="privacy-policy-bottom">
            <img
              alt="pastedImage"
              src="https://i.ibb.co/ZfQ01mH/Logo.png"
              className="privacy-policy-branding"
            />
            <span className="privacy-policy-text80">
              Copyright © Active - 2025
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .privacy-policy-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .privacy-policy-header {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .privacy-policy-mobile-navigation {
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
          .privacy-policy-logo1 {
            width: 64px;
          }
          .privacy-policy-links1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .privacy-policy-close-mobile-menu {
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
          .privacy-policy-icon1 {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .privacy-policy-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .privacy-policy-centered {
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
          }
          .privacy-policy-left1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .privacy-policy-link1 {
            display: contents;
          }
          .privacy-policy-logo2 {
            width: 105px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .privacy-policy-links2 {
            display: flex;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .privacy-policy-right1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .privacy-policy-burger-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .privacy-policy-mobile-menu-button {
            width: 40px;
            height: 40px;
            display: none;
          }
          .privacy-policy-link2 {
            display: contents;
          }
          .privacy-policy-get-started {
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
            background-color: var(--dl-color-danger-500);
          }
          .privacy-policy-get-started:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-danger-300);
          }
          .privacy-policy-text17 {
            font-size: 18px;
          }
          .privacy-policy-container12 {
            display: contents;
          }
          .privacy-policy-container13 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .privacy-policy-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .privacy-policy-content {
            align-self: center;
            align-items: flex-start;
          }
          .privacy-policy-li {
            align-items: flex-start;
          }
          .privacy-policy-container14 {
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .privacy-policy-text18 {
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .privacy-policy-text19 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            text-align: center;
          }
          .privacy-policy-container15 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            margin-top: 24px;
            align-items: center;
            padding-top: 10px;
            border-color: #ebebeb;
            border-width: 1px;
            padding-left: 12px;
            border-radius: 12px;
            margin-bottom: 0px;
            padding-right: 12px;
            flex-direction: row;
            padding-bottom: 10px;
          }
          .privacy-policy-icon3 {
            width: 20px;
            height: 20px;
          }
          .privacy-policy-text20 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-style: normal;
            font-weight: 600;
          }
          .privacy-policy-text21 {
            fill: var(--dl-color-danger-500);
          }
          .privacy-policy-container16 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .privacy-policy-container17 {
            gap: 16;
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            margin-bottom: 32px;
            flex-direction: column;
          }
          .privacy-policy-text23 {
            font-size: 32px;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 16px;
          }
          .privacy-policy-text24 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
            margin-bottom: 12px;
          }
          .privacy-policy-text25 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            line-height: 24px;
            padding-left: 24px;
          }
          .privacy-policy-container18 {
            gap: 16;
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            margin-bottom: 32px;
            flex-direction: column;
          }
          .privacy-policy-text30 {
            font-size: 32px;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 16px;
          }
          .privacy-policy-text31 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
            margin-bottom: 16px;
          }
          .privacy-policy-text32 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            line-height: 20px;
            padding-left: 24px;
          }
          .privacy-policy-text34 {
            color: var(--dl-color-gray-500);
            font-size: 20px;
            line-height: 24px;
          }
          .privacy-policy-text37 {
            color: var(--dl-color-gray-500);
            font-size: 20px;
            line-height: 24px;
          }
          .privacy-policy-text40 {
            color: var(--dl-color-gray-500);
            font-size: 20px;
            line-height: 24px;
          }
          .privacy-policy-container19 {
            gap: 16;
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            margin-bottom: 32px;
            flex-direction: column;
          }
          .privacy-policy-text46 {
            font-size: 32px;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 16px;
          }
          .privacy-policy-text47 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
            margin-bottom: 16px;
          }
          .privacy-policy-text50 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            line-height: 24px;
            padding-left: 24px;
          }
          .privacy-policy-text52 {
            color: var(--dl-color-gray-500);
            font-size: 20px;
            line-height: 24px;
          }
          .privacy-policy-container20 {
            gap: 16;
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            margin-bottom: 32px;
            flex-direction: column;
          }
          .privacy-policy-text55 {
            font-size: 32px;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 16px;
          }
          .privacy-policy-text56 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 16px;
          }
          .privacy-policy-container21 {
            gap: 16;
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            margin-bottom: 32px;
            flex-direction: column;
          }
          .privacy-policy-text59 {
            font-size: 32px;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 16px;
          }
          .privacy-policy-text60 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 16px;
          }
          .privacy-policy-container22 {
            gap: 16;
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            margin-bottom: 32px;
            flex-direction: column;
          }
          .privacy-policy-text63 {
            font-size: 32px;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 16px;
          }
          .privacy-policy-text64 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 16px;
          }
          .privacy-policy-container23 {
            gap: 16;
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            margin-bottom: 32px;
            flex-direction: column;
          }
          .privacy-policy-text67 {
            font-size: 32px;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 16px;
          }
          .privacy-policy-text68 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 16px;
          }
          .privacy-policy-container24 {
            gap: 16;
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            margin-bottom: 32px;
            flex-direction: column;
          }
          .privacy-policy-text71 {
            font-size: 32px;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            margin-bottom: 16px;
          }
          .privacy-policy-text72 {
            fill: var(--dl-color-gray-500);
            color: var(--dl-color-gray-500);
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 16px;
          }
          .privacy-policy-footer {
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
          .privacy-policy-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .privacy-policy-left2 {
            width: 33%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .privacy-policy-contact {
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            flex-direction: column;
          }
          .privacy-policy-text75 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .privacy-policy-link3 {
            color: rgb(196, 196, 196);
          }
          .privacy-policy-right2 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .privacy-policy-category1 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .privacy-policy-text76 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .privacy-policy-links3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .privacy-policy-link4 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .privacy-policy-link5 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .privacy-policy-link6 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .privacy-policy-text77 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .privacy-policy-category2 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .privacy-policy-text78 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .privacy-policy-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .privacy-policy-link7 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .privacy-policy-text79 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .privacy-policy-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .privacy-policy-branding {
            width: var(--dl-size-size-large);
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            margin-bottom: var(--dl-space-space-unit);
          }
          .privacy-policy-text80 {
            color: rgb(104, 104, 104);
          }
          @media (max-width: 1200px) {
            .privacy-policy-centered {
              width: 100%;
              max-width: auto;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              background-color: transparent;
            }
            .privacy-policy-content {
              align-self: center;
            }
            .privacy-policy-container14 {
              gap: 0;
              flex-direction: column;
            }
            .privacy-policy-text18 {
              font-style: normal;
              margin-top: 0px;
              font-weight: 600;
              margin-bottom: var(--dl-space-space-unit);
            }
            .privacy-policy-text19 {
              color: rgb(0, 0, 0);
              max-width: 600px;
              text-align: center;
              line-height: 24px;
            }
            .privacy-policy-container15 {
              margin-top: 24px;
              margin-bottom: 0px;
            }
            .privacy-policy-text20 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-style: normal;
              font-weight: 600;
            }
            .privacy-policy-text22 {
              color: var(--dl-color-danger-500);
              font-style: normal;
              font-weight: 600;
            }
            .privacy-policy-container17 {
              gap: 16;
            }
            .privacy-policy-text23 {
              font-size: 32px;
              align-self: flex-start;
              font-style: normal;
              margin-top: 0px;
              font-weight: 500;
              margin-bottom: 0px;
            }
            .privacy-policy-text24 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 20px;
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
              line-height: 24px;
              margin-bottom: 16px;
            }
            .privacy-policy-text25 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 20px;
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
              line-height: 24px;
            }
            .privacy-policy-text26 {
              fill: var(--dl-color-gray-500);
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
            }
            .privacy-policy-text27 {
              fill: var(--dl-color-gray-500);
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
            }
            .privacy-policy-text28 {
              fill: var(--dl-color-gray-500);
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
            }
            .privacy-policy-text29 {
              fill: var(--dl-color-gray-500);
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
            }
            .privacy-policy-container18 {
              gap: 16;
            }
            .privacy-policy-text30 {
              font-size: 32px;
              align-self: flex-start;
              font-style: normal;
              margin-top: 0px;
              font-weight: 500;
              margin-bottom: 0px;
            }
            .privacy-policy-text31 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 20px;
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
              line-height: 24px;
              margin-bottom: 16px;
            }
            .privacy-policy-text32 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 20px;
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
              line-height: 24px;
            }
            .privacy-policy-text35 {
              fill: var(--dl-color-gray-500);
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
            }
            .privacy-policy-text38 {
              fill: var(--dl-color-gray-500);
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
            }
            .privacy-policy-text41 {
              fill: var(--dl-color-gray-500);
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
            }
            .privacy-policy-text43 {
              fill: var(--dl-color-gray-500);
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
            }
            .privacy-policy-text44 {
              fill: var(--dl-color-gray-500);
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
            }
            .privacy-policy-container19 {
              gap: 16;
            }
            .privacy-policy-text46 {
              font-size: 32px;
              align-self: flex-start;
              font-style: normal;
              margin-top: 0px;
              font-weight: 500;
              margin-bottom: 0px;
            }
            .privacy-policy-text47 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 20px;
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
              line-height: 24px;
              margin-bottom: 16px;
            }
            .privacy-policy-text50 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 20px;
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
              line-height: 24px;
            }
            .privacy-policy-container20 {
              gap: 16;
            }
            .privacy-policy-text55 {
              font-size: 32px;
              align-self: flex-start;
              font-style: normal;
              margin-top: 0px;
              font-weight: 500;
              margin-bottom: 0px;
            }
            .privacy-policy-text56 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 20px;
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
              line-height: 24px;
              margin-bottom: 16px;
            }
            .privacy-policy-container21 {
              gap: 16;
            }
            .privacy-policy-text59 {
              font-size: 32px;
              align-self: flex-start;
              font-style: normal;
              margin-top: 0px;
              font-weight: 500;
              margin-bottom: 0px;
            }
            .privacy-policy-text60 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 20px;
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
              line-height: 24px;
              margin-bottom: 16px;
            }
            .privacy-policy-container22 {
              gap: 16;
            }
            .privacy-policy-text63 {
              font-size: 32px;
              align-self: flex-start;
              font-style: normal;
              margin-top: 0px;
              font-weight: 500;
              margin-bottom: 0px;
            }
            .privacy-policy-text64 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 20px;
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
              line-height: 24px;
              margin-bottom: 16px;
            }
            .privacy-policy-container23 {
              gap: 16;
            }
            .privacy-policy-text67 {
              font-size: 32px;
              align-self: flex-start;
              font-style: normal;
              margin-top: 0px;
              font-weight: 500;
              margin-bottom: 0px;
            }
            .privacy-policy-text68 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 20px;
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
              line-height: 24px;
              margin-bottom: 16px;
            }
            .privacy-policy-container24 {
              gap: 16;
            }
            .privacy-policy-text71 {
              font-size: 32px;
              align-self: flex-start;
              font-style: normal;
              margin-top: 0px;
              font-weight: 500;
              margin-bottom: 0px;
            }
            .privacy-policy-text72 {
              fill: var(--dl-color-gray-500);
              color: var(--dl-color-gray-500);
              font-size: 20px;
              max-width: 700px;
              align-self: flex-start;
              text-align: left;
              line-height: 24px;
              margin-bottom: 16px;
            }
            .privacy-policy-text76 {
              color: rgb(255, 255, 255);
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            }
            .privacy-policy-link4 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .privacy-policy-link5 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .privacy-policy-link6 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .privacy-policy-text77 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .privacy-policy-link7 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .privacy-policy-text79 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
          }
          @media (max-width: 991px) {
            .privacy-policy-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .privacy-policy-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .privacy-policy-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .privacy-policy-left1 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .privacy-policy-logo2 {
              width: 64px;
            }
            .privacy-policy-links2 {
              display: none;
            }
            .privacy-policy-right1 {
              width: 40;
            }
            .privacy-policy-mobile-menu-button {
              display: flex;
            }
            .privacy-policy-get-started {
              visibility: hidden;
              border-collapse: collapse;
            }
            .privacy-policy-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .privacy-policy-top {
              flex-direction: column;
            }
            .privacy-policy-left2 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .privacy-policy-text75 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .privacy-policy-link3 {
              text-decoration: underline none;
            }
            .privacy-policy-right2 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .privacy-policy-links3 {
              gap: var(--dl-space-space-unit);
            }
            .privacy-policy-links4 {
              gap: var(--dl-space-space-unit);
            }
            .privacy-policy-branding {
              width: var(--dl-size-size-medium);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .privacy-policy-text80 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .privacy-policy-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .privacy-policy-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .privacy-policy-left1 {
              margin-left: var(--dl-space-space-unit);
            }
            .privacy-policy-right1 {
              margin-right: var(--dl-space-space-unit);
            }
            .privacy-policy-get-started {
              margin-top: var(--dl-space-space-twounits);
            }
            .privacy-policy-text19 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text24 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text25 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text26 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text27 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text28 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text29 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text31 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text32 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text35 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text38 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text41 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text43 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text44 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text47 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text50 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text56 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text60 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text64 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text68 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-text72 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .privacy-policy-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .privacy-policy-logo1 {
              margin-left: 0px;
            }
            .privacy-policy-icon1 {
              align-items: center;
              justify-content: center;
            }
            .privacy-policy-centered {
              background-color: transparent;
            }
            .privacy-policy-get-started {
              width: 100%;
              opacity: 1;
              overflow: visible;
            }
            .privacy-policy-container14 {
              align-self: center;
              margin-bottom: 32px;
            }
            .privacy-policy-text18 {
              font-style: normal;
              text-align: center;
              font-weight: 600;
            }
            .privacy-policy-text19 {
              line-height: 24px;
              margin-bottom: 0px;
            }
            .privacy-policy-text23 {
              font-style: normal;
              font-weight: 600;
            }
            .privacy-policy-text24 {
              line-height: 24px;
            }
            .privacy-policy-text25 {
              line-height: 24px;
            }
            .privacy-policy-text26 {
              line-height: 24px;
            }
            .privacy-policy-text27 {
              line-height: 24px;
            }
            .privacy-policy-text28 {
              line-height: 24px;
            }
            .privacy-policy-text29 {
              line-height: 24px;
            }
            .privacy-policy-text30 {
              font-style: normal;
              font-weight: 600;
            }
            .privacy-policy-text31 {
              line-height: 24px;
            }
            .privacy-policy-text32 {
              line-height: 24px;
            }
            .privacy-policy-text35 {
              line-height: 24px;
            }
            .privacy-policy-text38 {
              line-height: 24px;
            }
            .privacy-policy-text41 {
              line-height: 24px;
            }
            .privacy-policy-text43 {
              line-height: 24px;
            }
            .privacy-policy-text44 {
              line-height: 24px;
            }
            .privacy-policy-text46 {
              font-style: normal;
              font-weight: 600;
            }
            .privacy-policy-text47 {
              line-height: 24px;
            }
            .privacy-policy-text50 {
              line-height: 24px;
            }
            .privacy-policy-text55 {
              font-style: normal;
              font-weight: 600;
            }
            .privacy-policy-text56 {
              line-height: 24px;
            }
            .privacy-policy-text59 {
              font-style: normal;
              font-weight: 600;
            }
            .privacy-policy-text60 {
              line-height: 24px;
            }
            .privacy-policy-text63 {
              font-style: normal;
              font-weight: 600;
            }
            .privacy-policy-text64 {
              line-height: 24px;
            }
            .privacy-policy-text67 {
              font-style: normal;
              font-weight: 600;
            }
            .privacy-policy-text68 {
              line-height: 24px;
            }
            .privacy-policy-text71 {
              font-style: normal;
              font-weight: 600;
            }
            .privacy-policy-text72 {
              line-height: 24px;
            }
            .privacy-policy-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default PrivacyPolicy

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
