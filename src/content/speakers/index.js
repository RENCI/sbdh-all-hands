import yolandaLawsonImg from '../../images/yolanda-lawson.jpeg'
import yolandaLawson from './yolandaLawson.yaml'
import donnaEnnisImg from '../../images/donna-ennis.png'
import donnaEnnis from './donnaEnnis.yaml'
import anikaFosterImg from '../../images/anika-foster.jpg'
import anikaFoster from './anikaFoster.yaml'

export const speakers = [
  {
    image: yolandaLawsonImg,
    ...yolandaLawson
  },
  {
    image: donnaEnnisImg,
    ...donnaEnnis
  },
  {
    image: anikaFosterImg,
    ...anikaFoster
  }
]