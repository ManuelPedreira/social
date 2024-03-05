import SpinerSVG from "../svg/SpinnerSVG";
import "./styles.css";

function LoadingSpinner() {
  return (
    <div className="loading">
      <SpinerSVG />
    </div>
  );
}

export default LoadingSpinner;
