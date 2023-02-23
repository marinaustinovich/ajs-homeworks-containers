export class ErrorRepository {
  constructor(...args) {
    this.mapErrors = new Map(args);
  }

  translate(code) {
    if (this.mapErrors.has(code)) {
      return this.mapErrors.get(code);
    }

    return 'Unknown error';
  }
}

export default function showMap() {
  const errors = new ErrorRepository([400, 'Bad Request'], [403, 'Bad Forbidden'], [404, 'Not Found']);
  console.log(errors.translate(403));
  return errors.translate(403);
}
