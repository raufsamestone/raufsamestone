const styles = ({ palette, typography }) => ({
  menuIcon: {
    cursor: 'pointer',
  },
  menuContainer: {
    position: 'absolute',
    top: typography.pxToRem(16),
    right: typography.pxToRem(-8),
    textAlign: 'right',
    background: 'white',
    padding: `${typography.pxToRem(16)} ${typography.pxToRem(8)}`,
  },
  navLink: {
    border: 'none',
    display: 'inline-block',
    padding: `${typography.pxToRem(8)} 0`,
    textDecoration: 'none',
    color: palette.text.secondary,
  },
  navLinkActive: {
    fontWeight: 500,
    background: 'white',
    width: '100vw'
  },
});

export default styles;
