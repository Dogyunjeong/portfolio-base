const baseStyle = {
  wrapper: {
    maxWidth: '52rem',
    fontSize: '1.5rem',
    margin: 'auto',
    width: '100%',
  },
  emphasize: {
    fontSize: '4rem',
    fontWeight: 600,
    color: '#e5057d',
    textShadow: '-1.6px -1.6px black, 1.6px -1.6px black, -1.6px 1.6px black, 1.6px 1.6px black',
    '@media (max-width: 720px)': {
        fontSize: '2rem',
    }
  },
  yellow: {
    color: '#feee32',
  },
  green: {
    color: '#70b62c',
  },
  blue: {
    color: '#009fe3',
  },
  pink: {
    color: '#e5057d'
  }
}

export { baseStyle }
