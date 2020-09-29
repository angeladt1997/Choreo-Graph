import Logout from './Logout';

it('should direct user to Landing', () => {
    const input = 'Logout';
    const expectedOutput = '  <div><h1>Logout Page</h1><p>Return to homepage to login</p><Link to=\'/Landing\'><button>Home</button></Link>  </div>'
    const actualOutput = Logout(input);
    expect(actualOutput).toBe(expectedOutput)
})