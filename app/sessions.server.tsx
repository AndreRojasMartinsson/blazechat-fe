import { createCookieSessionStorage } from "react-router";
import { createThemeSessionResolver } from "remix-themes";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "site-theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
