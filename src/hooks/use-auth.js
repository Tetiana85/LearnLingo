import { useSelector } from 'react-redux';

export function useAuth() {
  const { name, email, password, id, token } = useSelector(
    (state) => state.user
  );

  return {
    isAuth: Boolean(name),
    name,
    email,
    password,
    id,
    token,
  };
}
