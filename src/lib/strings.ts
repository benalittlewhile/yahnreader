export const getUrlFragment = (url: string) => {
  const routes = url.split(/http.?:\/\//)[1].split("/");
  if (routes[0] === "github.com") {
    return `${routes[0]}/${routes[1]}`;
  } else {
    return routes[0];
  }
};
