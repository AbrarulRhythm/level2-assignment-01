# Access Modifiers in TypeScript OOP

Encapsulation forms a fundamental pillar of Object Oriented Programming (OOP) in TypeScript. By controlling property visibility, developers build robust software architectures. TypeScript provides four primary modifiers for class members: public, private, protected, and readonly.

## The Visibility Modifiers

**public** serves as the default modifier. Any **public** property or method remains accessible from anywhere inside the class, derived subclasses, or external modules. Conversely, **private** restricts access strictly to the class where the member is defined, hiding internal mechanics from external code and subclasses.

**protected** offers a middle ground by restricting external access while permitting child classes to access parent members.

### Example:

```javascript
class Account {
  public accountHolder: string;
  private balance: number = 0;
  protected accountType: string = "Savings";

  constructor(holder: string) {
    this.accountHolder = holder;
  }
}

class PremiumAccount extends Account {
  public getType(): string {
    return this.accountType; // Accessible in subclass
  }
}
```

## Immutable Properties with Readonly

Unlike visibility modifiers, **readonly** prevents reassigning a property after initialization within the declaration or constructor. You can combine it with visibility modifiers to create immutable **private** or **public** fields.

### Example:

```javascript
class User {
  public readonly id: string;

  constructor(id: string) {
    this.id = id; // Allowed in constructor
  }
}
```

## Conclusion

Understanding access modifiers helps enforce contract boundaries and software design patterns. Utilizing **private** and **protected** shields internal logic, while **readonly** guarantees property immutability across complex applications.
