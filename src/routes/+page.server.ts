import { redirect } from "@sveltejs/kit";

export const actions = {
  setTheme: async ({ cookies, url }) => {
    const theme = url.searchParams.get("theme");
    const redirectTo = url.searchParams.get("redirectTo");

    if (theme) {
      cookies.set("theme", theme, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }

    throw redirect(303, redirectTo ? `/${redirectTo.slice(1)}` : "/");
  },
};
