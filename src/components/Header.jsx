const Header = (props) => {
  //`${props.title}` -> {props.title}

  return (
    <header>
      <h1>{props.title}</h1>
      <nav>
        <a href={props.links[0]}>link</a>
        <a href={props.links[1]}>link</a>
        <a href={props.links[2]}>link</a>
      </nav>
    </header>
  );
};

export default Header;
