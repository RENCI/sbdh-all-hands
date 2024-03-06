import PropTypes from 'prop-types'
import { Link } from '../link'
import sbdhLogo from '../../images/sbdh-logo.png'
import sbdhCompass from '../../images/sbdh-compass.png'

const SIZES = {
  tiny: 30,
  small: 120,
  medium: 180,
  large: 225,
}

export const Brand = ({ size, compass = false }) => {

  return (
    <Link noIcon to="https://southbigdatahub.org/">
      <img
        src={ compass ? sbdhCompass : sbdhLogo }
        width={ SIZES?.[size] || SIZES.large }
        alt="South Big Data Hub Logo"
      />
    </Link>
  )  
}

Brand.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  compass: PropTypes.bool,
}
