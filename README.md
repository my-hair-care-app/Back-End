Postman Documentation

# Endpoints

BASEURL https://bw-how-to-4.herokuapp.com/

## Authorization

### POST /api/auth/register

example request  
{
"username":"Polka",
"password":"Dot",
"name":"John Smith"
}

#### POST /api/auth/login

example request- which is an account  
{
"username":"raven",
"password": "raven"
}

## All Endpoints below this point require tokens to access

## Users

### GET /api/users

Returns all users

example result  
[
{
"id": 1,
"username": "raven",
"name": "raven",
"city": "Ann Arbor",
"state": "MI"
},
{
"id": 2,
"username": "tony",
"name": "tony",
"city": "Cincinnati",
"state": "OH"
},
{
"id": 3,
"username": "sarah",
"name": "sarah",
"city": "Memphis",
"state": "TN"
}
]

### GET /api/users/:id

example result  
{
"id": 2,
"name": "tony",
"username": "tony",
"city": "Cincinnati",
"state": "OH"
}

### currently broken PUT /api/users/:id

example input  
{
"name": "raven",
"username": "raven",
"city": "Ann Arbor",
"state": "Narnia"
}

### DELETE /api/users/:id

example result  
{
"message": "The user has been removed"
}

##todo

### GET /api/todo/

example result
[
{
"id": 2,
"title": "How to Love your Cactus",
"photo_url": null,
"steps": "1 Love the Cactus 2 Love the cactus 3 Love the Cactus"
}
]

### GET /api/todo/2

example result
{
"id": 2,
"title": "How to Love your Cactus",
"photo_url": null,
"steps": "1 Love the Cactus 2 Love the cactus 3 Love the Cactus"
}

### POST /api/todo

{
"id": 3,
"title": "How to Love your Cactus!",
"photo_url": null,
"steps": "1 Love the Cactus 2 Love the cactus 3 Love the Cactus"
}

### PUT /api/todo/:id

{
"id": 3,
"title": "How to Love your Cactus!",
"photo_url": null,
"steps": "1 Love the Cactus 2 Love the cactus 3 Love the Cactus"
}

### DELETE /api/todo/:id

example result  
{
"message": "The item has been removed"
}
