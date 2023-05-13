const SideBar = () => {
  return (
    <nav className="flex flex-col gap-12 border border-r-2 px-6 border-borderColor">
      <h2>
        <img src="./src/assets/logo.svg" alt="" />
      </h2>
      <ul>
        <li>
          <a href="/dashboard" className="flex items-center gap-2">
            <img src="./src/assets/dashboard.svg" alt="dashboard" />
            Dashboard
          </a>
        </li>
        <li>
          <a href="/patient-list" className="flex text-main items-center gap-2">
            <img src="./src/assets/dashboard.svg" alt="dashboard" />
            Patient List
          </a>
        </li>
        <li>
          <a href="/dashboard" className="flex text-main items-center gap-2">
            <img src="./src/assets/dashboard.svg" alt="dashboard" />
            Dashboard
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
