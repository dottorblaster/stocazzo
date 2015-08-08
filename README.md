# Stocazzo As A Service
A Node REST service to provide Stocazzo as an asset for your application.

## API endpoints
### /
Will return a "stocazzo".

Optional parameters: q (a query), big (configures the response as a "stograncazzo");

#### Example
Standard API call:

```sh
$ http get stocazzo.io

HTTP/1.1 200 OK
Connection: keep-alive
Date: Sat, 08 Aug 2015 16:03:08 GMT
Transfer-Encoding: chunked
cache-control: no-cache
content-encoding: gzip
content-type: application/json; charset=utf-8
vary: accept-encoding

{
    "response": "stocazzo"
}
```

Example with a query:

```sh
$ http get stocazzo.io q==chi\?

HTTP/1.1 200 OK
Connection: keep-alive
Date: Sat, 08 Aug 2015 16:06:07 GMT
Transfer-Encoding: chunked
cache-control: no-cache
content-encoding: gzip
content-type: application/json; charset=utf-8
vary: accept-encoding

{
    "query": "chi?",
    "response": "stocazzo"
}
```

Example with even more emphasis:

```sh
$ http get stocazzo.io q==chi\? big==1
HTTP/1.1 200 OK
Connection: keep-alive
Date: Sat, 08 Aug 2015 16:08:34 GMT
Transfer-Encoding: chunked
cache-control: no-cache
content-encoding: gzip
content-type: application/json; charset=utf-8
vary: accept-encoding

{
    "query": "chi?",
    "response": "stograncazzo"
}
```

### /caps
Will return a 'stocazzo', but caps. So, "STOCAZZO".

### /:query
Will return a JSON-form response with your query as a question and "stocazzo" as the answer.

### /caps/:query
Will return a JSON-form response with your query as a question and "stocazzo" as the answer. But caps-locked.

### /camel
Camelcase can always be useful. Will return a "StoCazzo".

### /ascii
You want a translation in your language and you don't like text or you want print it more nerdly? No problem, will return "8====D".
