# brace-replacer
## Requirements
```
$ deno --version

deno 1.33.2 (release, x86_64-apple-darwin)
v8 11.4.183.1
typescript 5.0.3
```

## Feature
### 1. Convert brace
```sample-${env}-${name}-${env}``` → ```sample-local-you-saku-local```


## Usage
```
$ git clone git@github.com:You-saku/brace-replacer.git
$ cd brace-replacer
$ deno run --allow-read main.ts 'sample-{env}-{name}-{env}' ※single quotation marks only
```

If you have any questions, Please give me your feedback if you'd like. 
