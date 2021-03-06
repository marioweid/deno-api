import { Application, config } from "./deps.ts";
import router from "./routing.ts";
import notFound from "./handlers/notFound.ts";
import errorMiddleware from "./middlewares/error.ts";

const app = new Application();

app.use(errorMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);

console.log(`Listening on ${config().API_PORT}...`);

await app.listen(`${config().API_HOST}:${config().API_PORT}`);
