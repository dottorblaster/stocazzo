# Stocazzo As A Service
A Node REST service to provide Stocazzo as an asset for your application.

## API
### /
Will return a "stocazzo".

### /caps
Will return a 'stocazzo', but caps. So, "STOCAZZO".

### /:query
Will return a JSON-form response with your query as a question and "stocazzo" as the answer.

### /caps/:query
Will return a JSON-form response with your query as a question and "stocazzo" as the answer. But caps-locked.

### /camel
Camelcase can always be useful. Will return a "StoCazzo".
