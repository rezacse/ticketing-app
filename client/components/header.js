import Link from "next/link";
export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ];
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link href="/">
        <a className="navbar-brand">GitTix</a>
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">
          {links
            .filter((l) => l)
            .map((l) => (
              <li key={l.href}>
                <Link href={l.href}>
                  <a className="nav-link">{l.label}</a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};
