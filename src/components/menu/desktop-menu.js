import { Box } from '@mui/joy'
import { Link, ExternalLinkIcon } from '../link'
import { menuPropTypes } from './menu'

//

export const DesktopMenu = ({ options = [] }) => {
  return (
    <Box
      role="navigation"
      component="ul"
      sx={{
        height: '60px',
        padding: 0,
        margin: 0,
        listStyleType: 'none',
        display: 'flex',
        alignItems: 'stretch',
        width: '100%',
        justifyContent: 'center',
        '.list-item': {
          display: 'flex',
          backgroundColor: 'transparent',
          transition: 'background-color 250ms',
          letterSpacing: '0.3px',
          '&:hover': {
            'backgroundColor': '#f3752144',
          },
        },
        '.list-item > a': {
          width: '100%',
          p: 2,
          textDecoration: 'none',
          textTransform: 'uppercase',
          color: '#414042',
        },
        '[aria-current="page"]': {
          'backgroundColor': '#f3752133',
        },
      }}
    >
      {
        options.map(({ label, path }) => (
          <li key={ path } className="list-item">
            <Link nav to={ path }>{ label }</Link>
          </li>
        ))
      }
      <li className="list-item" >
        <Link nav to="https://southbigdatahub.org/">
          About the South Hub
          <ExternalLinkIcon fill="#414042"/>
        </Link>
      </li>
    </Box>
  )
}

DesktopMenu.propTypes = { ...menuPropTypes }
