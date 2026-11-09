# TypeScript: Type Aliases vs Interfaces

TypeScript developers often debate when to use type aliases versus interface definitions. Although both type aliases and interfaces can define the structure of object types, they differ in terms of their core syntax and capabilities. Understanding these key differences ensures a cleaner and more scalable codebase.

## Key Differences

The primary technical distinction lies in declaration merging and extendability. An interface can be merged by re-declaring it within the same scope, whereas a type alias cannot be re-declared once it has been defined. Furthermore, type aliases can represent primitive types, union types, tuples, and mapped types in contrast, interfaces are used exclusively to define the structure of objects.

### Example:

```javascript
// Declaration Merging (Interfaces only)
interface User {
name: string;
}
interface User {
age: number;
} // User now has both name and age

// Type Aliases (Unions & Primitives)
type ID = string | number;
type Point = [number, number];
```

Extending types also uses distinct syntax. Interfaces use the extends keyword, while type aliases use intersection types via the & operator.

### Example:

```javascript
// Interface extension
interface Animal { name: string; }
interface Dog extends Animal { breed: string; }

// Type intersection
type Vehicle = { make: string; };
type Car = Vehicle & { model: string; };
```

## When to Use Which?

Choose an interface when building object-oriented structures, public API contracts, or libraries that benefit from declaration merging. Prefer a type alias when working with unions, primitives, tuples, function signatures, or complex type manipulations. As a general rule, default to interface for object definitions until you need the specific features of type.

## Conclusion

Both type aliases and interfaces remain essential tools in TypeScript. By reserving interfaces for object models and type aliases for complex unions or utility types, you maintain a predictable and maintainable codebase.
