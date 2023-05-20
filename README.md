# bracket-replacer
## Requirements
```
$ deno --version

deno 1.33.2 (release, x86_64-apple-darwin)
v8 11.4.183.1
typescript 5.0.3
```

## Feature
### 1. Convert placeholder
```sample-{env}-{name}-{env}``` → ```sample-local-you-saku-local```

※ Now, Only `{}` is supported.


## Usage
```
$ git clone git@github.com:You-saku/bracket-replacer.git
$ cd bracket-replacer
$ deno run --allow-read main.ts "sample-{env}-{name}-{env}"
```

If you have any questions, Please give me your feedback if you'd like. 
