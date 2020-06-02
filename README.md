# Deno Api
This is a PoC for a Deno api with a mongoDB databse
currently the databse is hosted on Mongo Atlas https://www.mongodb.com/cloud/atlas

# Run the app
build and run the app: `docker-compose up --build`

# Api 
 * Get all available users (GET) `localhost:4000/users`
 * Get an specific user (GET) `localhost:4000/users/:id`
 * Delete an existing users (DELETE) `localhost:4000/users:id`
 * Create an user (POST) `localhost:4000/users`
   body (json) `
   {name: string,
    role: string,
    jiraAdmin: boolean}` 
 * Update an user (PUT) `localhost:4000/users/:id`
 body (json) `{name?: string,
    role?: string,
    jiraAdmin?: boolean}`

# Note
the dependency caching in `deps.ts` is currently not working since deno is somehow missing the openPlugin function due to missing permissions (--alow-plugin) permissions.
in future releases of deno, it might be working, until then i just commented the line of code out
