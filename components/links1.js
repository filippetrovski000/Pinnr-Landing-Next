import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Links1 = (props) => {
  return (
    <>
      <div className="links1-links">
        <a href="#features" className="links1-link1 Link">
          {props.text ?? (
            <Fragment>
              <span className="links1-text2">Features</span>
            </Fragment>
          )}
        </a>
        <a href="#how-it-works" className="links1-link2 Link">
          {props.text1 ?? (
            <Fragment>
              <span className="links1-text4">How it works</span>
            </Fragment>
          )}
        </a>
        <a href="#why-pinnr?" className="links1-link3 Link">
          {props.text2 ?? (
            <Fragment>
              <span className="links1-text5">Why Pinnr?</span>
            </Fragment>
          )}
        </a>
        <span className="Link">
          {props.text3 ?? (
            <Fragment>
              <span className="links1-text3">Blog</span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .links1-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .links1-link1 {
            text-decoration: none;
          }
          .links1-link2 {
            text-decoration: none;
          }
          .links1-link3 {
            text-decoration: none;
          }
          .links1-text2 {
            display: inline-block;
          }
          .links1-text3 {
            display: inline-block;
          }
          .links1-text4 {
            display: inline-block;
          }
          .links1-text5 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Links1.defaultProps = {
  text: undefined,
  text3: undefined,
  text1: undefined,
  text2: undefined,
}

Links1.propTypes = {
  text: PropTypes.element,
  text3: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
}

export default Links1
