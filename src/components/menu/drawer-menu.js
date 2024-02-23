import { Fragment, useState } from 'react'
import { Box, Divider, Drawer, IconButton, ModalClose, Stack } from '@mui/joy'
import { Menu as MenuIcon } from 'react-feather'
import { Link } from '../link'
import { Brand } from '../brand'
import { menuPropTypes } from './menu'

//

export const DrawerMenu = ({ options = [] }) => {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={ () => setOpen(true) }
        sx={{ mx: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={ open }
        onClose={ () => setOpen(false) }
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            p: 2,
          }}
        >
          <Brand />
          <ModalClose
            id="close-icon"
            sx={{ position: 'initial' }}
          />
        </Stack>

        <Divider />

        <Box
          role="navigation"
          component="ul"
          sx={{
            padding: 0,
            margin: 0,
            listStyleType: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            width: '100%',
            justifyContent: 'center',
            '.list-item': {
              display: 'flex',
              backgroundColor: 'transparent',
              transition: 'background-color 250ms',
              '&:hover': {
                'backgroundColor': '#f3752144',
              },
            },
            '.list-item > a': {
              width: '100%',
              padding: 2,
              textDecoration: 'none',
              textTransform: 'uppercase',
            },
            '[aria-current="page"]': {
              'backgroundColor': '#f3752133',
            },
          }}
        >
          {
            options.map(({ label, path }) => (
              <li
                key={ path }
                className="list-item"
                onClick={ () => setOpen(false) }
              >
                <Link nav to={ path }>{ label }</Link>
              </li>
            ))
          }
        </Box>
      </Drawer>
    </Fragment>
  )
}

DrawerMenu.propTypes = { ...menuPropTypes }
