
console.log('[file]', 'src/Redux/services/auth-header.js');
export default function authHeader() {
  console.log('[file]:export default function authHeader', 'src/Redux/services/auth-header.js');
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    // For Spring Boot back-end
    // return { Authorization: "Bearer " + user.accessToken };
console.log("user: ", user);
    // for Node.js Express back-end
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
