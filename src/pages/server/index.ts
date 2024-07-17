import type { APIRoute } from 'astro';

// Outputs: /builtwith.json
export const POST: APIRoute = async ({ cookies, request }) => {

  let token = cookies.get('_tok')?.value
  let body =  request.headers.get('server-fn')
  console.log('body: ',  body);

  return new Response(JSON.stringify({ token }))
}