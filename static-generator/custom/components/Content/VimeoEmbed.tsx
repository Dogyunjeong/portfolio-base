import React from 'react'
import clsx from 'clsx'
import useStyles from '../../../common/hooks/styles.hook'

const styles = {
  iframeContainer: {
    padding: '56.25% 0 0 0',
    position: 'relative',
  },
  iframe: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  }
}

export interface VimeoEmbedProps {
  className?: string
  componentData: { vimeoId: string }
}

const VimeoEmbed: React.SFC<VimeoEmbedProps> = (props) => {
  const classes = useStyles(styles)
  return (
    <div className={clsx('vimeo-space', classes.iframeContainer, props.className)} >
      <iframe
        src={`https://player.vimeo.com/video/${props.componentData.vimeoId}`}
        className={classes.iframe}
        frameBorder="0"
        allowFullScreen
      />
      <script src="https://player.vimeo.com/api/player.js" />
    </div>
  )
}

export default VimeoEmbed;