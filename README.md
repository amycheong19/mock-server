## Descriptions

😎 The mock server project demo from [json-server](https://github.com/typicode/json-server). A project acts as a router for server as a endpoint for the same port, thus each project has their own custom routes for separation purpose.

Added in [Faker](https://github.com/marak/Faker.js/) to populate random data as convenience.

## Examples
- **Sorting**: _sort, _order (optional)
```
http://localhost:3000/meetingrooms/employees?_sort=name&_order=DESC
```

- **Searching**: q
```
http://localhost:3000/meetingrooms/employees?q=senior
```

- **Operators**: _lte (less than equal), _gte (greater than equal), _ne (exclude), _like (like)
```
//Get age less than / equal 31
http://localhost:3000/meetingrooms/employees?age_lte=31
```

- **Relationship**: _embed (include children), _expand(include parent)
```
http://localhost:3000/meetingrooms/departments?name=finance&_embed=employees
```

- **Filter**: 
```
http://localhost:3000/[employees]?[level=:level]
```
**\:** indicates parameters and

Add **&** for following parameters


## 1. GET
- **Get whole database**
```
http://localhost:3000/meetingrooms/db
```

- **Get all**
```
http://localhost:3000/meetingrooms/employees
```

- **Filter some posts**
```
http://localhost:3000/meetingrooms?id=1 //return 1 item
http://localhost:3000/meetingrooms/employees?first=Nickolas&first=Rupert //return 2 items
```

- **Search (q)**
```
http://localhost:3000/meetingrooms/employees?q=senior
```
return all fields that has 'senior'

- **Sorting (_sort & _order)**
Default order: ASC
```
http://localhost:3000/meetingrooms/employees?_sort=name&_order=ASC
```
*Note: Custom routes sorting is not returning right sequence

- **Operators**:  _lte (less than equal), _gte (greater than equal), _ne (exclude), _like (like)
```
http://localhost:3000/meetingrooms/departments?name_like=den 
``` 

- **Relationship**: Get related records from the request
To include children resources, add _embed 
To include parent resource, add _expand

```
http://localhost:3000/meetingrooms/departments?name=:department&_embed=employees
```

## 2. POST (create)
http://localhost:3000/meetingrooms/employees/all
with body:

```swift
{
  "first": "Wonder",
  "last": "Girl",
  "phone": "239.933.1719",
  "email": "wonder.girl@gmail.com",
  "level": "mid",
  "age": 27,
  "departmentId": 2
}
```
    
**Note**
- A POST, PUT or PATCH request should include a Content-Type: application/json header to use the JSON in the request body. Otherwise it will result in a 200 OK but without changes being made to the data
    - Does not support multiple entries

## 3. PUT (update)
http://localhost:3000/meetingrooms/employees/:id
with body:

```
{
  "first": "Wonder",
  "last": "Girl",
  "phone": "239.933.1719",
  "email": "wonder.girl@gmail.com",
  "level": "senior",
}
```
    
**Note:**
- A POST, PUT or PATCH request should include a Content-Type: application/json header to use the JSON in the request body. Otherwise it will result in a 200 OK but without changes being made to the data
- Does not support multiple entries
- Need to provide full entry

## 4. DELETE
```
http://localhost:3000/meetingrooms/employees/8
```

**Note:** Does not support multiple entries

## 5. Custom routes (Rewriter)
```
{
  //To set endpoint for meeting rooms
  //Accessed all by Http://localhost:3000/meetingrooms/
  "/meetingrooms/": "/",

  "/meetingroomsDB/": "/db",
  "/employees/all": "/employees/",
  "/employeesLevel=:level": "/employees?level=:level",
  "/employeesBelow30": "/employees?age_lte=31",
}
```


## ========== FAQ 🙋 ============
What I do if I started a new project?
1. Copy sample folder - meetingRooms
2. In server.js, add:
    - var newProjectRouter = require("./<newProjectFolder>/<newProjectRoute>");
    - server.use(newProjectRouter)
3. In <newProjectRewriter.json>, change:
    - "/newprojectendpoint/": "/"
    - configure the rest of the APIs URL

If I want to test in my machine, how?
1. Have the code in your machine
2. node server.js

What is this json-server?
💁 https://github.com/typicode/json-server

It's better to have knowledge in :
- Node.js
- Express: https://expressjs.com/en/4x/api.html
