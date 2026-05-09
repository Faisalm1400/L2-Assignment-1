###  Why is "any" labeled "type safety hole" for handling unpredictable data
- If we use "any" on a value TypeScript looses the ability to fact check whether the expected value type matches the provided value type.

# Example:
```bash
let a: any = "Hello";
let b: number = a;
```
- Here type string cannot be assigned to type number.


### Why is "unknown" the safer choice for handling unpredictable data
- Unlike "any", "unknown" forces to narrow down the type.

# Example:
```bash
let value: unknown;

if(typeof value === "string"){
    console.log(value.toUppercase());
    }
```

### Explain the concept of type narrowing.
- If we don't know the type of a value. To prevent errors, we have to narrow down the type that value holds.

# Example
```bash
let value: unknown;

if(typeof value === "string"){
    console.log(value.toUppercase());
    }else if(typeof value === "number"){
        console.log(value.toFix(2));
        }else{
        console.log(value = false);
        }
```