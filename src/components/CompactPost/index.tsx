import ProfileIcon from "../ProfileIcon";
import "./styles.css";

type PostProps = {
  icon?: string;
  name: string;
  account: string;
  text: string;
};

const formatText = (text: string): string => {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
};

const CompactPost = ({ icon, name, account, text }: PostProps) => {
  return (
    <div className="compactPost">
      <ProfileIcon className="icon" imageSrc={icon} colorByText={name} />
      <div>
        <div className="user">
          <span className="userName">{name}</span>
          <span className="userAccount">{account}</span>
        </div>
        <span className="body">{formatText(text)}</span>
      </div>
    </div>
  );
};

export default CompactPost;
