FROM hayd/alpine-deno:1.0.2

EXPOSE 4000

WORKDIR /app

# currently not working
# USER deno

# currently not working
# COPY deps.ts .
# RUN deno cache  deps.ts

COPY . .
# currently not working
# RUN deno cache index.ts

CMD ["run", "--allow-env", "--allow-net","--allow-plugin","--allow-read","--allow-write","--unstable", "index.ts"]