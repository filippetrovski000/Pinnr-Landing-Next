import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact4 = (props) => {
  return (
    <>
      <div className="contact4-contact20 thq-section-padding">
        <div className="contact4-max-width thq-section-max-width">
          <div className="contact4-section-title">
            <span className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="contact4-text24">
                    Our team is here to assist you with any inquiries.
                  </span>
                </Fragment>
              )}
            </span>
            <div className="contact4-content1">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact4-text27">Get in Touch</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact4-text19">
                      <span>
                        Have a question or need support? Drop us a message!
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
          </div>
          <div className="contact4-row">
            <div className="contact4-content2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact4-contact-info1">
                <div className="contact4-content3">
                  <h3 className="contact4-text13 thq-heading-3">Email</h3>
                  <p className="contact4-text14 thq-body-large">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="contact4-text23">
                          Follow us on social media for updates and tips:
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <span className="contact4-email thq-body-small">
                  {props.email1 ?? (
                    <Fragment>
                      <span className="contact4-text22">info@pinnr.com</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact4-content4">
              <svg
                viewBox="0 0 1024 1024"
                className="contact4-icon3 thq-icon-medium"
              >
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact4-contact-info2">
                <div className="contact4-content5">
                  <h3 className="contact4-text15 thq-heading-3">Phone</h3>
                  <p className="contact4-text16 thq-body-large">
                    {props.content4 ?? (
                      <Fragment>
                        <span className="contact4-text25">
                          Facebook: @pinnr
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <span className="contact4-phone thq-body-small">
                  {props.phone1 ?? (
                    <Fragment>
                      <span className="contact4-text29">+1-123-456-7890</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact4-content6">
              <svg
                viewBox="0 0 1024 1024"
                className="contact4-icon5 thq-icon-medium"
              >
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact4-contact-info3">
                <div className="contact4-content7">
                  <h3 className="contact4-text17 thq-heading-3">Office</h3>
                  <p className="contact4-text18 thq-body-large">
                    {props.content5 ?? (
                      <Fragment>
                        <span className="contact4-text26">
                          Instagram: @pinnr_official
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <span className="contact4-address thq-body-small">
                  {props.address1 ?? (
                    <Fragment>
                      <span className="contact4-text28">
                        123 Main Street, City, Country
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact4-contact20 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact4-max-width {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact4-section-title {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            max-width: 800px;
            align-self: flex-start;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact4-content1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact4-row {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contact4-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact4-contact-info1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact4-content3 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact4-text13 {
            align-self: flex-start;
            text-align: center;
          }
          .contact4-text14 {
            align-self: flex-start;
            text-align: left;
          }
          .contact4-email {
            align-self: flex-start;
            text-align: center;
          }
          .contact4-content4 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact4-icon3 {
            align-self: flex-start;
          }
          .contact4-contact-info2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact4-content5 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact4-text15 {
            align-self: stretch;
            text-align: left;
          }
          .contact4-text16 {
            text-align: left;
          }
          .contact4-phone {
            align-self: flex-start;
            text-align: center;
          }
          .contact4-content6 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact4-icon5 {
            align-self: flex-start;
          }
          .contact4-contact-info3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact4-content7 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact4-text17 {
            align-self: flex-start;
            text-align: left;
          }
          .contact4-text18 {
            text-align: left;
          }
          .contact4-address {
            align-self: flex-start;
            text-align: left;
          }
          .contact4-text19 {
            display: inline-block;
          }
          .contact4-text22 {
            display: inline-block;
          }
          .contact4-text23 {
            display: inline-block;
          }
          .contact4-text24 {
            display: inline-block;
          }
          .contact4-text25 {
            display: inline-block;
          }
          .contact4-text26 {
            display: inline-block;
          }
          .contact4-text27 {
            display: inline-block;
          }
          .contact4-text28 {
            display: inline-block;
          }
          .contact4-text29 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .contact4-row {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Contact4.defaultProps = {
  content1: undefined,
  email1: undefined,
  content3: undefined,
  content2: undefined,
  content4: undefined,
  content5: undefined,
  heading1: undefined,
  address1: undefined,
  phone1: undefined,
}

Contact4.propTypes = {
  content1: PropTypes.element,
  email1: PropTypes.element,
  content3: PropTypes.element,
  content2: PropTypes.element,
  content4: PropTypes.element,
  content5: PropTypes.element,
  heading1: PropTypes.element,
  address1: PropTypes.element,
  phone1: PropTypes.element,
}

export default Contact4
