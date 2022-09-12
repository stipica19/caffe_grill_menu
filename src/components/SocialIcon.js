import FacebookIcon from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';

const SocialIcon = ({ path, icon }) => {
  const getRightIcon = (icon) => {
    switch (icon) {
      case 'facebook':
        return (
          <FacebookIcon
            sx={{ '&:hover, &.Mui-focusVisible': { color: 'white' } }}
            color="warning"
            fontSize="large"
          />
        );
      case 'youtube':
        return (
          <YouTube
            sx={{ '&:hover, &.Mui-focusVisible': { color: 'white' } }}
            color="warning"
            fontSize="large"
          />
        );
      case 'instagram':
        return (
          <Instagram
            sx={{ '&:hover,&.Mui-focusVisible': { color: 'white' } }}
            color="warning"
            fontSize="large"
          />
        );
      default:
        return '';
    }
  };
  return (
    <a
      href={process.env.PUBLIC_URL + path}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={path}
    >
      {getRightIcon(icon)}
    </a>
  );
};

export default SocialIcon;
