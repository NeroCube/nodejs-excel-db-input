# Node.js Excel Database Input
A node.js rest api for db input by excel.

## Running the exmaple

To run this exmaple, from the root of this project:

```
docker-compose up
```

## Data Input
Post excel file to the webservice.

```
POST /urls HTTP/1.1
Host: localhost:8000
Cache-Control: no-cache
Postman-Token: 8c08a9c5-8c9e-08a2-fba4-3357dc5c3180
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="rawdata"; filename="test.xlsx"
Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet


------WebKitFormBoundary7MA4YWxkTrZu0gW--
```