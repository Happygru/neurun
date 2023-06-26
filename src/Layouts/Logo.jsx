import logoImg from "../assets/img/logo.png";

const Logo = (props) => {
  return (
    <div {...props}>
      <img src={logoImg} alt="logo" className="w-full" />
    </div>
  );
};

export default Logo;
