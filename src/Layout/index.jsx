import Nav from "../Components/Nav";

export function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
