import Steps from './Steps';

it('GET steps from db', () => {
    const input = 'View Steps';
    const expectedOutput = ' <Link to=\'/Steps\'><button>steps</button></Link>'
    const actualOutput = Steps(input);
    expect(actualOutput).toBe(expectedOutput)
})