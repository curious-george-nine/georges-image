/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
  const res = await fetch("https://georges-image-datas.vercel.app/");
  const data = await res.json();
  return { data };
}
