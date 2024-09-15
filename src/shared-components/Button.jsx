import "../css/index.css";

const Button = (prop) => {
  const { text, btn_type, style } = prop;
  return btn_type == "login" ? (
    <button className="login-btn" style={style}>
      {text}
    </button>
  ) : btn_type == "getstarted" ? (
    <button className="get-started-btn" style={style}>
      {text}
    </button>
  ) : (
    <button className="default-btn" style={style}>
      {text}
    </button>
  );
};

export default Button;
