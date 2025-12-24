export class ServerError extends Error {
  constructor(
    message: string,
    public code?: string,
    public status?: number,
  ) {
    super(message)
    this.name = 'ServerError'
  }
}
