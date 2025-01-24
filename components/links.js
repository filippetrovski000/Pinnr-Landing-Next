import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Links = (props) => {
  return (
    <>
      <div className="links-links">
        <span className="Link">
          {props.text ?? (
            <Fragment>
              <span className="links-text8">Features</span>
            </Fragment>
          )}
        </span>
        <span className="Link">
          {props.text1 ?? (
            <Fragment>
              <span className="links-text6">How it works</span>
            </Fragment>
          )}
        </span>
        <span className="Link">
          {props.text2 ?? (
            <Fragment>
              <span className="links-text7">Why Pinnr?</span>
            </Fragment>
          )}
        </span>
        <span className="Link">
          {props.text21 ?? (
            <Fragment>
              <span className="links-text5">Why Pinnr?</span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .links-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .links-text5 {
            display: inline-block;
          }
          .links-text6 {
            display: inline-block;
          }
          .links-text7 {
            display: inline-block;
          }
          .links-text8 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Links.defaultProps = {
  text21: undefined,
  text1: undefined,
  text2: undefined,
  text: undefined,
}

Links.propTypes = {
  text21: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text: PropTypes.element,
}

export default Links
