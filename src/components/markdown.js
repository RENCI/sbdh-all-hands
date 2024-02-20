import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from './link'
import { Typography, List, ListItem } from '@mui/joy'
/*
 * this object defines a map,
 *   DOM elements -> React components,
 * which allows us to map the HTML elements
 * that result from the markdown content
 * to the React components used in the rest
 * of the application.
 */
const componentMap = {
  // replace links (<a /> tags) with our "smart" Link component.
  a: ({ node, href, ...props }) => (
    <Link to={ href } { ...props } />
  ),
  p: ({ node, children, ...props }) => (
    <Typography level="body-md" gutterBottom {...props}>{children}</Typography>
  ),
  h1: ({ node, children, ...props }) => (
    <Typography level="h1" gutterBottom sx={{martinTop: '1rem'}} {...props}>{children}</Typography>
  ),
  ul: ({ node, children, ...props }) => (
    <List marker="disc" {...props}>{children}</List>
  ),
  li: ({ node, children, ...props }) => (
    <ListItem {...props}>{children}</ListItem>
  ),
  
}

export const Markdown = props => {
  return (
    <ReactMarkdown
      { ...props }
      components={ componentMap }
      remarkPlugins={ [remarkGfm] }
    />
  )
}