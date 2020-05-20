export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  createUser(user) {
    console.log('Creating user', user)
  }
}
