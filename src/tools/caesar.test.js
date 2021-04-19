const caesar = require('./caesar');

describe('caesar: encode', () => {
  it('encode', () => {
    const cipherText = caesar.encode(3, 'plain text');

    expect(cipherText).toBe('sodlq whaw');
  });
});

describe('caesar: decode', () => {
  it('decode', () => {
    const plainText = caesar.decode(3, 'sodlq whaw');

    expect(plainText).toBe('plain text');
  });
});
