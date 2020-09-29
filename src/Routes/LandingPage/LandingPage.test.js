import LandingPage from './LandingPage';

it('should direct user to login option', () => {
    const input = 'create new user';
    const expectedOutput = '<div className="landingDisplay"><div className="landingHeader">'
    const actualOutput = LandingPage(input);
    expect(actualOutput).toBe(expectedOutput)
})