import Header from "../components/Header/index";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
