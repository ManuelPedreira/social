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
  const stringToColorHexa = (text: string): string => {
    let hash = 0;

    text.split("").forEach((char) => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash);
    });
    let colour = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      const lessSaturatedValue = Math.floor((value + 128) / 2); // less saturated color
      colour += lessSaturatedValue.toString(16).padStart(2, "0");
    }

    return colour;
  };

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
