# Deno Api
This is a PoC for a Deno api 

# Run the app
to build and run the app just `docker-compose up --build`

# Test 
get the users via `curl localhost:4000/users`

# Note
the deps.ts is currently not working since deno is somehow not finding openPlugin
in future releases of deno, it might be working, until then i just commented the line of code out