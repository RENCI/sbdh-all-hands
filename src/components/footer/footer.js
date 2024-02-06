import classes from './footer.module.css'
import { Brand } from '../brand'

//

export const Footer = () => {
  return (
    <footer className={ classes.footer }>
      <span>
        &copy; { new Date().getFullYear() }
      </span>
      <Brand compass size="tiny" />
    </footer>
  )
}
