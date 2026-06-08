const Header = (props) => {
  return (
    <header className="flex justify-between p-4 bg-[#eddb22] shadow-md">
      <h1 className="font-bold text-2xl">{props.title}</h1>
      <nav className="flex gap-8">
        <a href={"#"} className="text-[#9b9165] hover:text-black">link 1</a>
        <a href={"#"} className="text-[#9b9165] hover:text-black">link 2</a>
        <a href={"#"} className="text-[#9b9165] hover:text-black">link 3</a>
      </nav>
    </header>
  );
}; 

export default Header;
