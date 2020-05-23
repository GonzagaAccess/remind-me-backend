export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async createUser(user) {
    const userWithCreatedAt = { ...user, created_at: new Date() }
    const userCreated = await this.userRepository.create(userWithCreatedAt)
    return userCreated
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll()
    return users
  }
}
