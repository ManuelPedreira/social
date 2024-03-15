import { stringToColorHexa } from "../../utils";
import ProfileIconSVG from "../svg/ProfileIconSVG";

type ProfileIconProps = {
  imageSrc?: string;
  color?: string;
  colorByText?: string;
  className?: string;
};

const ProfileIcon = ({
  imageSrc,
  color,
  colorByText,
  className,
}: ProfileIconProps) => {
  if (imageSrc !== undefined) {
    return <img className={className} src={imageSrc} />;
  }

  if (color !== undefined) {
    return <ProfileIconSVG className={className} color={color} />;
  }

  if (colorByText !== undefined) {
    return (
      <ProfileIconSVG
        className={className}
        color={stringToColorHexa(colorByText)}
      />
    );
  }

  return <ProfileIconSVG className={className} />;
};

export default ProfileIcon;
