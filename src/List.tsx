function List() {
  const names = ["Mior", "Afif", "Faiz", "Auris", "Akun"];
  return (
    <ul className="list-group">
      {names.map((name) => (
        <li key={name} className="list-group-item">
          {name}
        </li>
      ))}
    </ul>
  );
}
export default List;
