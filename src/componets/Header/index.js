import "./Header.scss";

const Header = () => {
  return (
    <header className="component-header">
      <div className="component-header__logo"></div>
      <nav>
        <a href="#">ссылка</a>
        <a href="#">ссылка</a>
        <a href="#">ссылка</a>
        <a href="#">ссылка</a>
      </nav>
      <div className="component-header__contacts">+79494949</div>
    </header>
  );
};

export default Header;
