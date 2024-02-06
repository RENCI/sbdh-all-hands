import classes from './header.module.css'
import { Brand } from '../brand'

//

export const Header = () => {
  return (
    <header className={ classes.appHeader }>
      <div className={ classes.overlay }>
        <Brand size="large" />
      </div>
    </header>
  )
}
