describe('Validator', () => {
    it('should validate valid usernames', () => {
      const validator = new Validator();
  
      expect(validator.validateUsername('john_doe')).toBe(true);
      expect(validator.validateUsername('12345')).toBe(true);
      expect(validator.validateUsername('a-b-c')).toBe(true);
    });
  
    it('should invalidate invalid usernames', () => {
      const validator = new Validator();
  
      expect(validator.validateUsername('john doe')).toBe(false);
      expect(validator.validateUsername('1234567')).toBe(false);
      expect(validator.validateUsername('-a-b-c-')).toBe(false);
    });
  });