class User {
  readonly id: number
  readonly email: string
  name: string

  constructor(id: number, email: string, name: string) {
    this.id = id
    this.email = email
    this.name = name
  }
}

const user = new User(1, "user@example.com", "John Doe")

user.name = "Jane Doe" // Allowed
user.id = 2 // Error: Cannot assign to 'id' because it is a read-only property.
