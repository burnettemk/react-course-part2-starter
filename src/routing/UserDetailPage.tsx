import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("name")); //has an effect that causes component to be impure
  const location = useLocation();

  console.log(location);

  return <p>User</p>;
};

export default UserDetailPage;
