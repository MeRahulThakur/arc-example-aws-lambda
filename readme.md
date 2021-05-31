#Test API using architect by Rahul

Using [Architect] (https://arc.codes) framework you can run the application locally by installing Architect and running `arc sandbox`, and deploying to AWS using `arc deploy` (deploys to staging environment by default).

## Running locally
First, install the Architect framework and AWS-SDK...

```
npm i -g @architect/architect aws-sdk
```

Then install the development dependencies for the `post-hello` function...

```
cd src/http/post-hello && npm i
```

To create environment variables using CLI
```
arc env [testing|staging|production] {VARIABLE_NAME} {VARIABLE_VALUE}
```
example -
```
arc env testing API_KEY your-api-key
```

To display env variables
```
arc env
```

To remove environment variable
```
arc env remove testing API_KEY
```


Finally, run the sandbox...

```
arc sandbox
```

Browse to http://localhost:3333, marvel and the wonders of serverless frameworks

## Deploy to AWS

```
arc deploy
```
