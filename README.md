# Service 

## Auth
### REGISTER

> POST

```http://localhost:4000/```

>Body

```json
  {
    "firstname": "Juan",
    "lastname": "Sanchez",
    "email": "juanCarlos@yahoo.com.pa",
    "password": "123456"
  }

```

> Response 
```json
  { 
    message: 'User successfully registered' 
  }

```

> Response ERROR

```
{
  "error": "Email and password is requerid"
}
```
```
{
  "error": "email must be unique"
}
```

### LOGIN

> POST

```json

{
  "email": "String",
  "password": "String"
}

```

> Response

```json
  {
    "status": 200,
    "token": "string"
  }
```

## Products

### GET PRODUCTS 

 > GET
 
```http://localhost:4000/search?query=[parametro]```

> Response

```json

{
  "count": 2,
  "data": [
    {
      "id": 51102,
      "url": "https://www.digitalife.com.mx/producto/51102",
      "price": 16.18,
      "name": "Cable de datos Blackpcs Lightning Macho a Micro USB Macho 30cm Negro CABLDPP-1",
      "img": "https://www.digitalife.com.mx/admin/uploads/productos/CABLDPP1_1.jpg",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 51101,
      "url": "https://www.digitalife.com.mx/producto/51101",
      "price": 16.18,
      "name": "Cable de datos Blackpcs Lightning Macho a Micro USB Macho 30cm Blanco CAWDPP-1",
      "img": "https://www.digitalife.com.mx/admin/uploads/productos/CAWDPP1_1.jpg",
      "createdAt": null,
      "updatedAt": null
    }
  ]
}

```

## User




