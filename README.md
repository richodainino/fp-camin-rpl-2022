## How to use

With the Web server and the MongoDB started and running, perform the following requests to consume the API:

### List all products

**Example request:**

- **GET** /products
- **Accept:** application/json
- **Content-Type:** application/json

**Example response:**

```json
{
    "status": "success",
    "data": {
        "products": [
            {
                "_id": "622b3efd2bb17dfdbecde543",
                "name": "Super Family HCC",
                "price": "Rp. 45.999",
                "image": "https://i.ibb.co/k0pGN3s/carousel01.png",
                "__v": 0
            },
            {
                "_id": "622b3f962bb17dfdbecde546",
                "name": "9Pcs Wings Bucket",
                "price": "Rp. 35.999",
                "image": "https://i.ibb.co/V3sZczK/carousel02.png",
                "__v": 0
            },
            {
                "_id": "622b3fab2bb17dfdbecde549",
                "name": "Wings Bucket",
                "price": "Rp. 25.999",
                "image": "https://i.ibb.co/YyXtSLN/carousel03.png",
                "__v": 0
            },
            {
                "_id": "622b3fc02bb17dfdbecde54c",
                "name": "Winger Combo BBQ",
                "price": "Rp. 22.999",
                "image": "https://i.ibb.co/RHJZ1Lj/carousel04.png",
                "__v": 0
            },
            {
                "_id": "622b3fd52bb17dfdbecde54f",
                "name": "Snack Bucket 1",
                "price": "Rp. 25.999",
                "image": "https://i.ibb.co/4KLxYjh/carousel05.png",
                "__v": 0
            }
        ]
    }
}
```

- **200** OK

### Get the details of a product by ID

**Example request:**

- **GET** /products/{id}
- **Accept:** application/json
- **Content-Type:** application/json

**Example response:**

```json
{
    "status": "success",
    "data": {
        "product": {
            "_id": "622b3efd2bb17dfdbecde543",
            "name": "Super Family HCC",
            "price": "Rp. 45.999",
            "image": "https://i.ibb.co/k0pGN3s/carousel01.png",
            "__v": 0
        }
    }
}
```

- **200** OK

### Create product
**Example request:**

- **POST** /products
- **Accept:** application/json
- **Content-Type:** application/json

**Example response:**

```json
{
    "status": "success",
    "data": {
        "newProduct": {
            "name": "Zuper Box",
            "description": "Nasi + Ayam + Zuper Krunch + Minuman",
            "price": "Rp. 55.999",
            "image": "https://i.ibb.co/2jSzdvN/catalog03.png",
            "_id": "622b815d1136722443fff0f3",
            "__v": 0
        }
    }
}
```

- **200** OK


### Edit product detail
**Example request:**

- **PATCH** /products
- **Accept:** application/json
- **Content-Type:** application/json

**Example response:**

```json
{
    "status": "success",
    "data": {
        "product": {
            "_id": "622b815d1136722443fff0f3",
            "name": "Zuper Box",
            "description": "Nasi + Ayam + Zuper Krunch + Minuman",
            "price": "Rp. 1.999",
            "image": "https://i.ibb.co/2jSzdvN/catalog03.png",
            "__v": 0
        }
    }
}
```

- **200** OK

### Delete product
**Example request:**

- **DELETE** /products
- **Accept:** application/json
- **Content-Type:** application/json

**Example response:**
```json
{
    "status": "success",
    "data": null
}
```

- **200** OK
