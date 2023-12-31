import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
  const theme = event.url.searchParams.get("theme") ?? event.cookies.get("theme");
  if (theme && theme !== "system") {
    return await resolve(event, {
      transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`),
    });
  }
  return await resolve(event);
}) satisfies Handle;
