import "./button.scss";

function Button({ imageBtn }) {
  return (
    <div className="button-wrapper">
      <img src={imageBtn} alt="Logo associé au bouton latéral" />
    </div>
  );
}

export default Button;
