import Dashboard from './Dashboard';

it('should allow user to view pieces', () => {
    const input = 'View Pieces';
    const expectedOutput = ' <Link to=\'/Pieces\'><button>View Pieces</button></Link>'
    const actualOutput = Dashboard(input);
    expect(actualOutput).toBe(expectedOutput)
})