import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{user.name}</h2>
      <button onClick={() => dispatch(logoutThunk())}>Exit</button>
    </div>
  );
};

export default UserMenu;
