export const authHeader = () => {
  let user = localStorage.getItem("user");

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token, userid: user.user_id };
  } else {
    return {};
  }
};
