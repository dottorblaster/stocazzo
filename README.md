# Stocazzo As A Service
A Node REST service to provide Stocazzo as an asset for your application.

## API endpoints
### /
Will return a "stocazzo".

_Optional parameters_:

1. **q** - a query
2. **big** - configures the response as a "stograncazzo"

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
Will return a "stocazzo", but caps. So, "STOCAZZO".

_Optional parameters_:

1. **q** - a query
2. **big** - configures the response as a "STOGRANCAZZO"

#### Example
Standard API call:

```sh
$ http get stocazzo.io/caps

HTTP/1.1 200 OK
Connection: keep-alive
Date: Sat, 08 Aug 2015 16:03:08 GMT
Transfer-Encoding: chunked
cache-control: no-cache
content-encoding: gzip
content-type: application/json; charset=utf-8
vary: accept-encoding

{
    "response": "STOCAZZO"
}
```

Example with a query:

```sh
$ http get stocazzo.io/caps q==chi\?

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
    "response": "STOCAZZO"
}
```

Example with even more emphasis:

```sh
$ http get stocazzo.io/caps q==chi\? big==1

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
    "response": "STOGRANCAZZO"
}
```

### /camel
Camelcase can always be useful. Will return a "StoCazzo".

_Optional parameters_:

1. **q** - a query
2. **big** - configures the response as a "StoGranCazzo"

#### Example
Standard API call:

```sh
$ http get stocazzo.io/camel

HTTP/1.1 200 OK
Connection: keep-alive
Date: Sat, 08 Aug 2015 16:03:08 GMT
Transfer-Encoding: chunked
cache-control: no-cache
content-encoding: gzip
content-type: application/json; charset=utf-8
vary: accept-encoding

{
    "response": "StoCazzo"
}
```

Example with a query:

```sh
$ http get stocazzo.io/camel q==chi\?

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
    "response": "StoCazzo"
}
```

Example with even more emphasis:

```sh
$ http get stocazzo.io/camel q==chi\? big==1

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
    "response": "StoGranCazzo"
}
```

### /ascii
You want a translation in your language and you don't like text or you want print it more nerdly? No problem, will return "8====D".

_Optional parameters_:

1. **q** - a query
2. **big** - configures the response as a "8=======D"

#### Example
Standard API call:

```sh
$ http get stocazzo.io/ascii

HTTP/1.1 200 OK
Connection: keep-alive
Date: Sat, 08 Aug 2015 16:03:08 GMT
Transfer-Encoding: chunked
cache-control: no-cache
content-encoding: gzip
content-type: application/json; charset=utf-8
vary: accept-encoding

{
    "response": "8====D"
}
```

Example with a query:

```sh
$ http get stocazzo.io/ascii q==chi\?

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
    "response": "8====D"
}
```

Example with even more emphasis:

```sh
$ http get stocazzo.io/ascii q==chi\? big==1

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
    "response": "8=======D"
}
```

### /undersocre
You don't like camelCase and you prefer the underscore_notation? No problem, will return "sto_cazzo".

_Optional parameters_:

1. **q** - a query
2. **big** - configures the response as a "sto_gran_cazzo"

#### Example
Standard API call:

```sh
$ http get stocazzo.io/underscore

HTTP/1.1 200 OK
Connection: keep-alive
Date: Sat, 08 Aug 2015 16:03:08 GMT
Transfer-Encoding: chunked
cache-control: no-cache
content-encoding: gzip
content-type: application/json; charset=utf-8
vary: accept-encoding

{
    "response": "sto_cazzo"
}
```

Example with a query:

```sh
$ http get stocazzo.io/underscore q==chi\?

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
    "response": "sto_cazzo"
}
```

Example with even more emphasis:

```sh
$ http get stocazzo.io/underscore q==chi\? big==1

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
    "response": "sto_gran_cazzo"
}
```

