
let db = new XMLDocument('GET', 'https://api.github.com/users/%7BUSERNAME%7D')

db.send()
let a = JSON.parse(db)

console.log(a);



