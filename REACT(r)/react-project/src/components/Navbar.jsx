function Navbar({ title, menuItems }) {
  return (
    <nav>
      <h1>{title}</h1>
      <ul>
       {menuItems.map((item,index)=>(
        <li key={index}>{item}</li>
       ))}
      </ul>
    </nav>
  );
}
export default Navbar;