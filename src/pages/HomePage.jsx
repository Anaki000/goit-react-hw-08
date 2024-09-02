import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../redux/auth/selectors";

export const HomePage = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return (
      <div>
        <h2>CONTACTIO</h2>
        <p>Welcome {user.name}, this is your contact book </p>
        <NavLink to="/contacts">Enter</NavLink>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h3>What is CONTACTIO?</h3>
        <p>
          CONTACTIO - is a modern e-book of people's information for commercial
          usage. You need just name and phone, to save them for better days.
        </p>
      </div>
      <div>
        <h3>How it works?</h3>
        <p>
          You will have a form where you can add some data about person, which
          you want to save. Plus you have some features that will make your
          usage much easier and more understandable and you can edit or delete
          them in any time. CONTACTIO always protecting your contacts, so they
          won't go out until you don't want it.
        </p>
      </div>

      <h2>THANK YOU FOR CHOOSING CONTACTIO</h2>
      <button>
        <NavLink to="/contacts">Go to contacts...</NavLink>
      </button>
    </div>
  );
};
