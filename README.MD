Warning: if you're looking for something "real", this is not :)

This package is for demo purposes only.

## What's the point then?
This is an example how we can copy folders in gulp tasks including symlinks.

There are 3 folders:
```
    - dist (where everything is "compiled")
    - src (our source code)
    - libs (our libraries to be linked with src folder)
```

The goal is to place *create a link of all libs* in *src* folder!

## How?
Just count to 3!

1. Install the package
```
npm install
```

2. Setup - this will create a symlink of all libs in src folder
```
gulp install
```

3. Build - this will copy the content of src into dist folder
```
gulp build
```

Wow! Is that so simple? The answer is YES! :)