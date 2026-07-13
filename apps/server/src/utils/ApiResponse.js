class ApiResponse {
  constructor(
    statusCode,

    data = null,

    message = "Success",

    metadata = null,
  ) {
    this.success = true;

    this.statusCode = statusCode;

    this.message = message;

    this.data = data;

    if (metadata) {
      this.metadata = metadata;
    }
  }
}

export default ApiResponse;
