// 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((number) => number % 2 === 0);
};

// 2
const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};

// 3
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber) => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// 4
const user = { id: 1, name: "John Doe", age: 21 };

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

// 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (Book: Book) => {
  const isRead: boolean = true;
  let newBook = { ...Book, isRead };
  return newBook;
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

// 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

// 7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Both inputs must be an array");
  }

  return arr1.filter((value) => arr2.includes(value));
};
