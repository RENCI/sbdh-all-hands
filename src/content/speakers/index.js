import yolandaLawsonImg from '../../images/yolanda-lawson.png'
import yolandaLawson from './yolandaLawson.yaml'
import donnaEnnisImg from '../../images/donna-ennis.png'
import donnaEnnis from './donnaEnnis.yaml'
import anikaGossImg from '../../images/anika-goss.jpg'
import anikaGoss from './anikaGoss.yaml'
import angeliqueJohnsonImg from '../../images/angelique-johnson.png'
import angeliqueJohnson from './angeliqueJohnson.yaml'

export const speakers = [
  {
    image: donnaEnnisImg,
    ...donnaEnnis
  },
  {
    image: anikaGossImg,
    ...anikaGoss
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
    image: anikaGossImg,
    ...anikaGoss
  },
]