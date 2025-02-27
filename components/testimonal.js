import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Testimonal = (props) => {
  return (
    <>
      <div className="testimonal-testimonal testimonal">
        <span className="testimonal-text">{props.quote}</span>
        <div className="testimonal-author">
          <div className="testimonal-avatar">
            <img
              alt={props.avatarAlt}
              src={props.avatarSrc}
              className="testimonal-image"
            />
          </div>
          <div className="testimonal-user">
            <span className="testimonal-name">{props.name}</span>
            <span className="testimonal-divider">—</span>
            <span className="testimonal-from">{props.from}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonal-testimonal {
            position: relative;
          }
          .testimonal-text {
            line-height: 24px;
          }
          .testimonal-author {
            gap: var(--dl-space-space-unit);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .testimonal-avatar {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonal-image {
            width: 40px;
            height: 40px;
            display: flex;
            object-fit: cover;
            border-radius: 50%;
          }
          .testimonal-user {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonal-name {
            color: rgb(0, 0, 0);
            font-style: normal;
            font-weight: 600;
          }
          .testimonal-divider {
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .testimonal-from {
            color: rgb(0, 0, 0);
          }
          @media (max-width: 767px) {
            .testimonal-text {
              font-size: 14px;
              line-height: 21px;
            }
            .testimonal-image {
              width: 28px;
              height: 28px;
            }
            .testimonal-name {
              font-size: 14px;
            }
            .testimonal-from {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonal.defaultProps = {
  from: 'Vista Social',
  avatarAlt: 'image',
  avatarSrc:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&ixlib=rb-1.2.1&w=200',
  name: 'Andy Smith',
  quote:
    '"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”',
}

Testimonal.propTypes = {
  from: PropTypes.string,
  avatarAlt: PropTypes.string,
  avatarSrc: PropTypes.string,
  name: PropTypes.string,
  quote: PropTypes.string,
}

export default Testimonal
