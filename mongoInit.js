db = db.getSiblingDB('deno-db')
db.users.drop();
db.createCollection("users");
db.users.insertOne({
  name: "Mario",
  role: "Frontend Developer",
  jiraAdmin: false,
  added: "2020-05-21T00:00:00.000+00:00"
})
db.users.insertOne({
  name: "Andreas",
  role: "Product Owner",
  jiraAdmin: true,
  added: "2020-05-21T00:00:00.000+00:00"
})