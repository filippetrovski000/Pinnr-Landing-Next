import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ActiveUsers = (props) => {
  return (
    <>
      <div className="active-users-active-users metrics">
        <span className="active-users-text1">{props.statistic}</span>
        <span className="active-users-text2">{props.caption}</span>
      </div>
      <style jsx>
        {`
          .active-users-active-users {
            position: relative;
          }
          .active-users-text1 {
            color: rgb(255, 255, 255);
            font-size: 56px;
            font-style: normal;
            font-weight: 700;
          }
          .active-users-text2 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            margin-top: 13px;
          }
          @media (max-width: 767px) {
            .active-users-text1 {
              font-size: 28px;
            }
            .active-users-text2 {
              font-size: 14px;
            }
          }
          @media (max-width: 479px) {
            .active-users-text1 {
              font-size: 28px;
            }
            .active-users-text2 {
              color: rgb(255, 255, 255);
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

ActiveUsers.defaultProps = {
  caption: 'Caption',
  statistic: 'Description',
}

ActiveUsers.propTypes = {
  caption: PropTypes.string,
  statistic: PropTypes.string,
}

export default ActiveUsers
