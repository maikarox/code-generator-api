# Code generator API

Node.js API that create codes based on a configuration.

At the moment, the configuration type is local and file is located in `src/configFiles/config.json`. It accepts three different algorithms: sequential, guid and hexadecimal.

Example config:

```json
{
  "quantity": 10,
  "algorithm": "hexadecimal",
  "length": 12
}
```

### Run it locally

To start the server create an `.env` file copying env.example run:

```
npm run dev:server
```

Get the Angular client from [this repository](https://github.com/maikarox/code-generator-client).
