import content from '../content/registration.md'
import { Fragment } from 'react'
import { Box } from '@mui/joy'
import { Markdown } from '../components/markdown'

export const RegistrationView = () => {
  return (
    <Fragment>
      <Markdown>{content}</Markdown>
      <Box 
        component="iframe"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdCXJLul-2ZShjKi2qHyQdMSPz3VPPJsHbuzgA0jSx4zDGfJQ/viewform?embedded=true"
        title='Registration form' 
        sx={{
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '1rem', 
          border: '0',
          height: '4250px'
        }}>
      </Box>
    </Fragment>
  )
}