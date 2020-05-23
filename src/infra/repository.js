export class Repository {
  constructor(conn, table) {
    this.conn = conn
    this.table = table
  }

  create(changes) {
    return this.conn(this.table).insert(changes)
  }

  update(id, changes) {
    return this.conn(this.table).where({ id }).update(changes)
  }

  findAll() {
    return this.conn.select(['name', 'email', 'id']).from(this.table)
  }
}
