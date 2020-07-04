import { initialiseBag } from '../helpers/bagHelper';

describe('when comparing tiles', () => {
  const result = initialiseBag();

  it('should return 100 tiles', () => {
    expect(result.length).toBe(100);
  });

  it('should contain two blanks', () => {
    expect(result.filter(t => t.letter === ' ')).toHaveLength(2);
  });

  it('should contain every letter of the alphabet', () => {
    const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

    alphabet.forEach(letter => {
      expect(result.filter(t => t.letter === letter).length).toBeGreaterThan(0);
    })
  });

  it('should have zero score for blanks', () => {
    const blanks = result.filter(t => t.letter === ' ');

    blanks.forEach(blank => {
      expect(blank.value).toBe(0);
    })
  });

  it('should have a score for non-blanks', () => {
    const nonblanks = result.filter(t => t.letter !== ' ');

    nonblanks.forEach(nonblank => {
      expect(nonblank.value).toBeGreaterThan(0);
    })
  });
});