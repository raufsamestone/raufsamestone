const styles = ({ palette, typography }) => ({
  menuContainer: {
    borderRadius: typography.pxToRem(4),
    display: 'inline-block',
  },
  navLink: {
    border: 'none',
    display: 'inline-block',
    padding: `${typography.pxToRem(8)} ${typography.pxToRem(8)}`,
    textDecoration: 'none',
    color: palette.text.secondary,
  },
  navLinkActive: {
    background: 'linear-gradient( 88.7deg, #f8ff17 10.6%, #f8ff1700 90% )'
  },
});

export default styles;
