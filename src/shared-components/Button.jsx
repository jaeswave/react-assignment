import "../css/index.css";

const Button = (prop) => {
  const { text, btn_type, style, identity } = prop;
  return btn_type == "login" ? (
    <button className="login-btn" style={style}>
      {text}
    </button>
  ) : btn_type == "getstarted" ? (
    <button className="get-started-btn" style={style}>
      {text}
    </button>
  ) : (
    <button className={identity} style={style}>
      {text}
    </button>
  );
};

export default Button;
