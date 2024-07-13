// Outputs: /builtwith.json
export async function GET({ params, request }) {

  let d = Date.now()
  return new Response(
    JSON.stringify({
      date: d,
      name: 'Astro',
      url: 'https://astro.build/'
    })
  )
}