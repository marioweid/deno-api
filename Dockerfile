FROM hayd/alpine-deno:1.0.2

EXPOSE 4000

WORKDIR /app

USER deno

# COPY deps.ts .
# RUN deno cache deps.ts

COPY . .
RUN deno cache index.ts

CMD ["run", "-A", "index.ts"]