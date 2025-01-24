import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const MobileNavigation = (props) => {
  return (
    <>
      <div id="mobile-menu" className="mobile-navigation-mobile-navigation">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="mobile-navigation-logo"
        />
        <div className="mobile-navigation-links">
          <span className="Link">
            {props.text ?? (
              <Fragment>
                <span className="mobile-navigation-text6">Solutions</span>
              </Fragment>
            )}
          </span>
          <span className="Link">
            {props.text1 ?? (
              <Fragment>
                <span className="mobile-navigation-text5">How it works</span>
              </Fragment>
            )}
          </span>
          <span className="Link">
            {props.text2 ?? (
              <Fragment>
                <span className="mobile-navigation-text4">Prices</span>
              </Fragment>
            )}
          </span>
        </div>
        <div
          id="close-mobile-menu"
          className="mobile-navigation-close-mobile-menu"
        >
          <svg
            viewBox="0 0 804.5714285714286 1024"
            className="mobile-navigation-icon1"
          >
            <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .mobile-navigation-mobile-navigation {
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
          .mobile-navigation-logo {
            width: 64px;
          }
          .mobile-navigation-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .mobile-navigation-close-mobile-menu {
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
          .mobile-navigation-icon1 {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .mobile-navigation-text4 {
            display: inline-block;
          }
          .mobile-navigation-text5 {
            display: inline-block;
          }
          .mobile-navigation-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .mobile-navigation-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .mobile-navigation-logo {
              margin-left: 0px;
            }
            .mobile-navigation-icon1 {
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

MobileNavigation.defaultProps = {
  text2: undefined,
  text1: undefined,
  logoSrc: 'https://i.ibb.co/ZfQ01mH/Logo.png',
  text: undefined,
  logoAlt: 'pastedImage',
}

MobileNavigation.propTypes = {
  text2: PropTypes.element,
  text1: PropTypes.element,
  logoSrc: PropTypes.string,
  text: PropTypes.element,
  logoAlt: PropTypes.string,
}

export default MobileNavigation
