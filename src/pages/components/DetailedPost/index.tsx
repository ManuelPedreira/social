import ProfileIcon from "../../../components/ProfileIcon";
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

const DetailedPost = ({ icon, name, account, text }: PostProps) => {
  return (
    <div className="detailedPost">
      <div className="header">
        <ProfileIcon className="icon" imageSrc={icon} colorByText={name} />
        <div className="user">
          <span className="userName">{name}</span>
          <span className="userAccount">{account}</span>
        </div>
      </div>
      <span className="body">{formatText(text)}</span>
    </div>
  );
};

export default DetailedPost;
