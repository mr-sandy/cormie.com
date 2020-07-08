import { findSelection, initialiseBoard } from '../helpers';
import { Selection } from '../types';

describe('when finding a selection on an empty board', () => {
  const board = initialiseBoard();

  it('should return an invalid selection if the start cell can\'t be included', () => {
    const expected = {
      valid: false,
      startRow: 1,
      endRow: 1,
      startColumn: 2,
      endColumn: 2
    } as Selection;

    const result = findSelection(board, 1, 2);

    expect(result).toEqual(expected);
  });

  it('should return a valid selection if the start cell can be included horizontally', () => {
    const expected = {
      valid: true,
      startRow: 7,
      endRow: 7,
      startColumn: 5,
      endColumn: 11
    } as Selection;

    const result = findSelection(board, 7, 5);

    expect(result).toEqual(expected);
  });

  it('should return an invalid selection if the start cell falls to the left', () => {
    const expected = {
      valid: false,
      startRow: 7,
      endRow: 7,
      startColumn: 8,
      endColumn: 8
    } as Selection;

    const result = findSelection(board, 7, 8);

    expect(result).toEqual(expected);
  });

  it('should return an invalid selection if the start cell falls to the right', () => {
    const expected = {
      valid: false,
      startRow: 7,
      endRow: 7,
      startColumn: 0,
      endColumn: 0
    } as Selection;

    const result = findSelection(board, 7, 0);

    expect(result).toEqual(expected);
  });

  it('should return a valid selection if the start cell can be included vertically', () => {
    const expected = {
      valid: true,
      startRow: 5,
      endRow: 11,
      startColumn: 7,
      endColumn: 7
    } as Selection;

    const result = findSelection(board, 5, 7);

    expect(result).toEqual(expected);
  });

  it('should return an invalid selection if the start cell falls above', () => {
    const expected = {
      valid: false,
      startRow: 8,
      endRow: 8,
      startColumn: 7,
      endColumn: 7
    } as Selection;

    const result = findSelection(board, 8, 7);

    expect(result).toEqual(expected);
  });

  it('should return an invalid selection if the start cell falls below', () => {
    const expected = {
      valid: false,
      startRow: 0,
      endRow: 0,
      startColumn: 7,
      endColumn: 7
    } as Selection;

    const result = findSelection(board, 0, 7);

    expect(result).toEqual(expected);
  });

  it('should return a valid horizontal selection if the start cell can be included horizontally and vertically', () => {
    const expected = {
      valid: true,
      startRow: 7,
      endRow: 7,
      startColumn: 7,
      endColumn: 13
    } as Selection;

    const result = findSelection(board, 7, 7);

    expect(result).toEqual(expected);

  });

  it('should return a valid vertical selection if the start cell can be included horizontally and vertically, but horizontal results have been excluded', () => {
    const expected = {
      valid: true,
      startRow: 7,
      endRow: 13,
      startColumn: 7,
      endColumn: 7
    } as Selection;

    const result = findSelection(board, 7, 7, false);

    expect(result).toEqual(expected);

  });
});