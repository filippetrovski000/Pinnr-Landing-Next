import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FAQ1 = (props) => {
  return (
    <>
      <div className="faq1faq7 thq-section-padding">
        <div className="faq1-max-width thq-section-max-width">
          <div className="thq-flex-column">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="faq1-text14">FAQs</span>
                </Fragment>
              )}
            </h2>
            <p className="faq1-text11 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="faq1-text16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="thq-flex-column faq1-list">
            <div className="faq1-list-item1">
              <p className="faq1-faq1-question thq-body-large">
                {props.faq1Question ?? (
                  <Fragment>
                    <span className="faq1-text30">What is Pinnr?</span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq1Answer ?? (
                  <Fragment>
                    <span className="faq1-text20">
                      Pinnr is a platform that helps users boost their Pinterest
                      strategy, increase visibility, and drive more sales
                      through AI-powered tools.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq1-list-item2">
              <p className="faq1-faq2-question thq-body-large">
                {props.faq2Question ?? (
                  <Fragment>
                    <span className="faq1-text18">
                      What features does Pinnr offer?
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq2Answer ?? (
                  <Fragment>
                    <span className="faq1-text15">
                      Pinnr offers features like maximizing growth, visibility,
                      and sales, personalized strategies for sales, and
                      transforming traffic into sales.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq1-list-item3">
              <p className="faq1-faq3-question thq-body-large">
                {props.faq3Question ?? (
                  <Fragment>
                    <span className="faq1-text27">
                      How does Pinnr help e-commerce brands?
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq3Answer ?? (
                  <Fragment>
                    <span className="faq1-text19">
                      Pinnr provides insights on trending topics on Pinterest
                      and helps optimize content for e-commerce brands.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq1-list-item4">
              <p className="faq1-faq4-question thq-body-large">
                {props.faq4Question ?? (
                  <Fragment>
                    <span className="faq1-text21">
                      How can Pinnr help increase sales?
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq4Answer ?? (
                  <Fragment>
                    <span className="faq1-text22">
                      Pinnr provides personalized strategies to help increase
                      sales and drive more revenue.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq1-list-item5">
              <p className="faq1-faq5-question thq-body-large">
                {props.faq5Question ?? (
                  <Fragment>
                    <span className="faq1-text23">
                      Does Pinnr offer support for optimizing content?
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq5Answer ?? (
                  <Fragment>
                    <span className="faq1-text28">
                      Yes, Pinnr helps optimize content for better performance
                      on Pinterest and increased visibility.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="thq-flex-column">
            <div className="faq1-content2">
              <h2 className="thq-heading-2">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="faq1-text29">Still have a question?</span>
                  </Fragment>
                )}
              </h2>
              <p className="faq1-text13 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="faq1-text24">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="faq1-container">
              <button className="thq-button-outline faq1-button">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="faq1-text17">Contact</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq1faq7 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .faq1-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .faq1-text11 {
            text-align: center;
          }
          .faq1-list-item1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq1-question {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-list-item2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq2-question {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-list-item3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq3-question {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-list-item4 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq4-question {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-list-item5 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq5-question {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-content2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .faq1-text13 {
            text-align: center;
          }
          .faq1-container {
            display: flex;
            position: relative;
          }
          .faq1-text14 {
            display: inline-block;
          }
          .faq1-text15 {
            display: inline-block;
          }
          .faq1-text16 {
            display: inline-block;
          }
          .faq1-text17 {
            display: inline-block;
          }
          .faq1-text18 {
            display: inline-block;
          }
          .faq1-text19 {
            display: inline-block;
          }
          .faq1-text20 {
            display: inline-block;
          }
          .faq1-text21 {
            display: inline-block;
          }
          .faq1-text22 {
            display: inline-block;
          }
          .faq1-text23 {
            display: inline-block;
          }
          .faq1-text24 {
            display: inline-block;
          }
          .faq1-text27 {
            display: inline-block;
          }
          .faq1-text28 {
            display: inline-block;
          }
          .faq1-text29 {
            display: inline-block;
          }
          .faq1-text30 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .faq1-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .faq1-text11 {
              text-align: left;
            }
            .faq1-list {
              gap: var(--dl-space-space-twounits);
            }
            .faq1-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ1.defaultProps = {
  heading1: undefined,
  faq2Answer: undefined,
  content1: undefined,
  action1: undefined,
  faq2Question: undefined,
  faq3Answer: undefined,
  faq1Answer: undefined,
  faq4Question: undefined,
  faq4Answer: undefined,
  faq5Question: undefined,
  content2: undefined,
  faq3Question: undefined,
  faq5Answer: undefined,
  heading2: undefined,
  faq1Question: undefined,
}

FAQ1.propTypes = {
  heading1: PropTypes.element,
  faq2Answer: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  faq2Question: PropTypes.element,
  faq3Answer: PropTypes.element,
  faq1Answer: PropTypes.element,
  faq4Question: PropTypes.element,
  faq4Answer: PropTypes.element,
  faq5Question: PropTypes.element,
  content2: PropTypes.element,
  faq3Question: PropTypes.element,
  faq5Answer: PropTypes.element,
  heading2: PropTypes.element,
  faq1Question: PropTypes.element,
}

export default FAQ1
