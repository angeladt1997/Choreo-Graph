import Pieces from './Pieces';

it('should GET pieces from database', () => {
    const input = 'Pieces';
    const expectedOutput = '<Link to=\'/Steps\'><button>Steps</button></Link>'
    const actualOutput = Pieces(input);
    expect(actualOutput).toBe(expectedOutput)
})