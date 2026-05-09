# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?
- In we use type specific. The code becomes repetitive.
- Generic make the logic dynamic and reusable.
- Suppose if we want a function that returns the first item of an array.

### Example:

```bash
# For string

function firstString(arr: string[]): string {
  return arr[0];
  }

# For number 
function firstNumber(arr: number[]): number {
  return arr[0];
}
```

- This duplicates the logic

- We can you "any" to use a single logic for both case. But the problem is "any" will accept incorrect approach & type safe will be gone.

### Example:
```bash
function first(arr: any[]): any {
  return arr[0];
}

const value = first([1, 2, 3]);
value.toUpperCase();
```

## Generic solution

### Example:
```bash
function first<T>(arr: T[]): T {
  return arr[0];
}

const num = first([1, 2, 3]);
T = number
const str = first(["a", "b"]);
T = string
```