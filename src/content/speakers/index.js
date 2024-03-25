import yolandaLawsonImg from '../../images/yolanda-lawson.png'
import yolandaLawson from './yolandaLawson.yaml'
import donnaEnnisImg from '../../images/donna-ennis.png'
import donnaEnnis from './donnaEnnis.yaml'
import anikaFosterImg from '../../images/anika-foster.jpg'
import anikaFoster from './anikaFoster.yaml'
import angeliqueJohnsonImg from '../../images/angelique-johnson.png'
import angeliqueJohnson from './angeliqueJohnson.yaml'

export const speakers = [
  {
    image: donnaEnnisImg,
    ...donnaEnnis
  },
  {
    image: anikaFosterImg,
    ...anikaFoster
  },
  {
    image: angeliqueJohnsonImg,
    ...angeliqueJohnson
  },
  {
    image: yolandaLawsonImg,
    ...yolandaLawson
  },
]

export const keynoteSpeakers = [
  {
    image: donnaEnnisImg,
    ...donnaEnnis
  },
  {
    image: yolandaLawsonImg,
    ...yolandaLawson
  },
  {
    image: anikaFosterImg,
    ...anikaFoster
  },
]