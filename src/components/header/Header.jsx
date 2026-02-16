
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="pt-8 text-white">
        {/*Logo*/}
        <Link to="/" className="text-3xl beautique font-light absolute py-2">
          Veauly
        </Link>
      </div>
    </div>
  );
};

export default Header;
