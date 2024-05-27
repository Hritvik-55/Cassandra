import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((store) => store.user);
  return (
    <div>
      {user === null && (
        <div className="w-screen absolute  bg-gradient-to-b from-black z-10">
          <img
            className="w-44 mx-14"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </div>
      )}

      {user && (
        <div className="flex justify-between">
          <div className="">
            <img
              className="w-44 mx-14"
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="logo"
            />
          </div>
          <div className="flex mx-20">
            <div className="my-auto">
              <img
                className="object-contain"
                src="https://occ-0-7724-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABb7kuX9mKPrFGfvZ0oJ9eMBbFCB7ZhumT7uHIoILp1FtGpeIhybv8zoGgNK76rr7N8bMdhn-kkbRnD6ut8mFLwqYXmdpwCw.png?r=eea"
              />
            </div>
            <div>
              <svg viewBox="0 0 10 10">
                <path fill="#fff" d="M0 0 L5 5 L10 0z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
