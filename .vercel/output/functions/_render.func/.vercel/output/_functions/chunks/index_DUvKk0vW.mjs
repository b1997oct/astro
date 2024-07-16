const GET = async ({
  cookies,
  request
}) => {
  let token = cookies.get("_tok")?.value;
  let body = request.headers.get("server-fn");
  console.log("body: ", body);
  return new Response(JSON.stringify({
    token
  }));
};

export { GET };
