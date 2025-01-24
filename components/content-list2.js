import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContentList2 = (props) => {
  return (
    <>
      <div className="content-list2-container thq-section-padding">
        <div className="content-list2-max-width thq-section-max-width thq-flex-column">
          <div className="content-list2-content10 thq-flex-column">
            <ul>
              <li className="content-list2-li1 thq-flex-column list-item">
                <h2 className="content-list2-heading1 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="content-list2-text11">
                        Personalized Strategies
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="content-list2-content1 thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="content-list2-text13">
                        Pinnr provides personalized Pinterest strategies
                        tailored to each e-commerce brand&apos;s specific needs
                        and goals, ensuring maximum effectiveness and results.
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="content-list2-ul2 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading2 ?? (
                        <Fragment>
                          <span className="content-list2-text25">
                            Data-Driven Insights
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content2 ?? (
                        <Fragment>
                          <span className="content-list2-text17">
                            Utilizing AI technology, Pinnr offers data-driven
                            insights to help e-commerce brands make informed
                            decisions and optimize their Pinterest presence for
                            success.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading3 ?? (
                        <Fragment>
                          <span className="content-list2-text24">
                            Visual Optimization
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content3 ?? (
                        <Fragment>
                          <span className="content-list2-text10">
                            With visual optimization tools, Pinnr enhances the
                            visual appeal of e-commerce brands&apos; content on
                            Pinterest, increasing engagement and visibility.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading4 ?? (
                        <Fragment>
                          <span className="content-list2-text20">
                            Conversion Optimization
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content4 ?? (
                        <Fragment>
                          <span className="content-list2-text21">
                            Pinnr focuses on converting Pinterest traffic into
                            actual sales for e-commerce brands, maximizing the
                            return on investment and driving revenue growth.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading5 ?? (
                        <Fragment>
                          <span className="content-list2-text18">
                            Competitive Analysis
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content5 ?? (
                        <Fragment>
                          <span className="content-list2-text19">
                            Stay ahead of the competition with Pinnr&apos;s
                            feature that identifies trending topics and helps
                            e-commerce brands capitalize on emerging
                            opportunities in their niche.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading6 ?? (
                        <Fragment>
                          <span className="content-list2-text26">
                            Brand Visibility Boost
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content6 ?? (
                        <Fragment>
                          <span className="content-list2-text15">
                            Pinnr is dedicated to boosting brand visibility on
                            Pinterest for e-commerce brands, increasing reach,
                            awareness, and ultimately driving more sales.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="content-list2-content11 thq-flex-column">
            <ul>
              <li className="content-list2-li7 thq-flex-column list-item">
                <h2 className="content-list2-heading7 thq-heading-2">
                  {props.heading7 ?? (
                    <Fragment>
                      <span className="content-list2-text23">Sales Growth</span>
                    </Fragment>
                  )}
                </h2>
                <p className="content-list2-content7 thq-body-small">
                  {props.content7 ?? (
                    <Fragment>
                      <span className="content-list2-text16">
                        By leveraging Pinnr&apos;s AI-powered platform,
                        e-commerce brands can experience significant growth in
                        sales through optimized Pinterest strategies and
                        targeted approaches.
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="content-list2-ul4 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading8 ?? (
                        <Fragment>
                          <span className="content-list2-text14">
                            Trend Identification
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content2 ?? (
                        <Fragment>
                          <span className="content-list2-text17">
                            Utilizing AI technology, Pinnr offers data-driven
                            insights to help e-commerce brands make informed
                            decisions and optimize their Pinterest presence for
                            success.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading9 ?? (
                        <Fragment>
                          <span className="content-list2-text22">
                            Performance Tracking
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content9 ?? (
                        <Fragment>
                          <span className="content-list2-text12">
                            Track the performance of your Pinterest strategies
                            with Pinnr&apos;s analytics tools, allowing you to
                            measure success and make data-backed adjustments for
                            continuous improvement.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content-list2-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list2-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list2-content10 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list2-li1 {
            align-items: flex-start;
          }
          .content-list2-heading1 {
            align-self: flex-start;
          }
          .content-list2-content1 {
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .content-list2-ul2 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          .content-list2-content11 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list2-li7 {
            align-items: flex-start;
          }
          .content-list2-heading7 {
            align-self: flex-start;
          }
          .content-list2-content7 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .content-list2-ul4 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          .content-list2-text10 {
            display: inline-block;
          }
          .content-list2-text11 {
            display: inline-block;
          }
          .content-list2-text12 {
            display: inline-block;
          }
          .content-list2-text13 {
            display: inline-block;
          }
          .content-list2-text14 {
            display: inline-block;
          }
          .content-list2-text15 {
            display: inline-block;
          }
          .content-list2-text16 {
            display: inline-block;
          }
          .content-list2-text17 {
            display: inline-block;
          }
          .content-list2-text18 {
            display: inline-block;
          }
          .content-list2-text19 {
            display: inline-block;
          }
          .content-list2-text20 {
            display: inline-block;
          }
          .content-list2-text21 {
            display: inline-block;
          }
          .content-list2-text22 {
            display: inline-block;
          }
          .content-list2-text23 {
            display: inline-block;
          }
          .content-list2-text24 {
            display: inline-block;
          }
          .content-list2-text25 {
            display: inline-block;
          }
          .content-list2-text26 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .content-list2-ul2 {
              padding-left: var(--dl-space-space-threeunits);
            }
            .content-list2-ul4 {
              padding-left: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .content-list2-ul2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .content-list2-ul4 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

ContentList2.defaultProps = {
  content3: undefined,
  heading1: undefined,
  content9: undefined,
  content1: undefined,
  heading8: undefined,
  content6: undefined,
  content7: undefined,
  content2: undefined,
  heading5: undefined,
  content5: undefined,
  heading4: undefined,
  content4: undefined,
  heading9: undefined,
  heading7: undefined,
  heading3: undefined,
  heading2: undefined,
  heading6: undefined,
}

ContentList2.propTypes = {
  content3: PropTypes.element,
  heading1: PropTypes.element,
  content9: PropTypes.element,
  content1: PropTypes.element,
  heading8: PropTypes.element,
  content6: PropTypes.element,
  content7: PropTypes.element,
  content2: PropTypes.element,
  heading5: PropTypes.element,
  content5: PropTypes.element,
  heading4: PropTypes.element,
  content4: PropTypes.element,
  heading9: PropTypes.element,
  heading7: PropTypes.element,
  heading3: PropTypes.element,
  heading2: PropTypes.element,
  heading6: PropTypes.element,
}

export default ContentList2
