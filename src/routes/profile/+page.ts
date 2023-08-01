// import { PUBLIC_UNSPLASH_CLIENT_ID } from "$env/static/public";
// import type { PageLoad } from "./$types";
// import type { UnsplashImage } from "$lib/types";
//
//
// export const load: PageLoad = async ({ fetch }) => {
//   const response = await fetch(
//     "https://api.unsplash.com/photos/random/?orientation=landscape&query=background-image",
//     {
//       headers: {
//         "Authorization": `Client-ID ${PUBLIC_UNSPLASH_CLIENT_ID}`,
//       },
//     },
//   );
//
//   const image = await response.json() as UnsplashImage;
//   return { image };
// };
