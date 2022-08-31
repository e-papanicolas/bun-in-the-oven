Bun.serve({
  fetch(req: Request) {
    console.log("a bun is in the oven");
    return new Response(`<h1>Hello World!</h1>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
  error(error: Error) {
    return new Response("Uh oh!!\n" + error.toString(), { status: 500 });
  },
});
