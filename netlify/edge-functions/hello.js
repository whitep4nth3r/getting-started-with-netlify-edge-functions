export default async (request, context) => {
  return new Response("Hello, World from the edge!", {
    headers: { "content-type": "text/html" },
  });
};
