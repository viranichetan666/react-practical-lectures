# Generator Function

    =>   A generator is a function that can stop midway and then continue from where it stopped. In short, a generator      appears to be a function but it behaves like an iterator.

    =>   A normal function such as this one cannot be stopped before it finishes its task i.e its last line is              executed. It follows something called run-to-completion model.
    
```
    function normalFunc() {
        console.log('I')
        console.log('cannot')
        console.log('be')
        console.log('stopped.')
    }
```

# Example

    https://jsfiddle.net/39buazrm/1/