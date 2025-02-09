import "../../styles/irregular.css";
import Title from "../Title/title";

const IrregularCard = ({ icon, title, description, size }) => {
  const cardStyles = {
    small: "inverted-radius-small",
    large: "inverted-radius-large",
  };

  const innerCardStyles = {
    small: "inner-card-small",
    large: "inner-card-large",
  };

  const iconStyles = {
    small: "irregular-card-icon-small",
    large: "irregular-card-icon-large",
  };

  return (
    <>
      {/* icon container */}
      <div className={`${iconStyles[size]} bg-fabricOfSpace animate-hflip`}>{icon}</div>
      {/* irregualr shape container */}
      <div
        className={`${cardStyles[size]} bg-gradient-to-r from-purple-900/20 shadow shadow-sm to-blue-900/20 flex justify-center items-center border border-[#FFFFFF14]`}
      >
        <div className={`${innerCardStyles[size]} text-driftingDream`}>
          <Title text={title} size="small" />
          <p className="leading-6">{description}</p>
        </div>
      </div>
    </>
  );
};

export default IrregularCard;
