import LoginPage from './LoginPage';

it('should direct user to Dashboard', () => {
    const input = 'Dashboard';
    const expectedOutput = '<div className="loginDisplay"><div className="loginHeader"><h1>Login to Choreo-Graph</h1></div><section className="loginBody"><LoginForm onSuccessfulLogin={[Function handleSuccessfulLogin]} /></section></div>'
    const actualOutput = LoginPage(input);
    expect(actualOutput).toBe(expectedOutput)
})