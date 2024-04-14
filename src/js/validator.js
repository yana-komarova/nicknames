class Validator {
    validateUsername(username) {
      const regex = /^(?![0-9_-]).*[a-zA-Z0-9_-]*[^0-9_-]$/;
      return regex.test(username);
    }
  }