import NewUser from './NewUser';

it('should direct user to Dashboard', () => {
    const input = 'Logged in';
    const expectedOutput = '<Link to=\'/Landing\'><button>Dashboard</button></Link>'
    const actualOutput = NewUser(input);
    expect(actualOutput).toBe(expectedOutput)
})