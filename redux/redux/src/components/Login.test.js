import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login"
test('user name should be render', () =>
{
    render(<Login/>);
    // eslint-disable-next-line no-restricted-globals
    const inputUuser = screen.getByPlaceholderText(/username/i)
    expect(inputUuser).toBeInTheDocument();
})


test('password should be render', () =>
{
    render(<Login/>);
    // eslint-disable-next-line no-restricted-globals
    const inputPassowrd = screen.getByPlaceholderText(/password/i)
    expect(inputPassowrd).toBeInTheDocument();
})


test('button should be render', () =>
{
    render(<Login/>);
    // eslint-disable-next-line no-restricted-globals
    const inputButton = screen.getByRole("button")
    expect(inputButton).toBeInTheDocument();
})

test('username input should be empty', () =>
{
    render(<Login/>);
    // eslint-disable-next-line no-restricted-globals
    const inputUuser = screen.getByPlaceholderText(/username/i)
    expect(inputUuser.value).toBe("");
})



test('password input should be empty', () =>
{
    render(<Login/>);
    // eslint-disable-next-line no-restricted-globals
    const inputPwd = screen.getByPlaceholderText(/password/i)
    expect(inputPwd.value).toBe("");

})


test('erorr message should be disable', () =>
{
    render(<Login/>);
    // eslint-disable-next-line no-restricted-globals
    const errorEl = screen.getByTestId("error")
    expect(errorEl).not.toBeVisible();
})


test('username should change', () =>
{
    render(<Login/>);
    // eslint-disable-next-line no-restricted-globals
    const inputUser = screen.getByPlaceholderText(/username/i)
    const testValue = 'test'

    //expect to be input 
    fireEvent.change(inputUser, { target: { value: testValue}})
    expect(inputUser.value).toBe(testValue);
})


test('password should change', () =>
{
    render(<Login/>);
    // eslint-disable-next-line no-restricted-globals
    const inputPassowrd = screen.getByPlaceholderText(/password/i)
    const testValuePWD = 'test'

    //expect to be input 
    fireEvent.change(inputPassowrd, { target: { value: testValuePWD}})
    expect(inputPassowrd.value).toBe(testValuePWD);
})




test('button should not disable if user input be render', () =>
{
    render(<Login/>);
    // eslint-disable-next-line no-restricted-globals
    const inputUser = screen.getByPlaceholderText(/username/i)
    const inputPassowrd = screen.getByPlaceholderText(/password/i)

    const valuetest = 'test';

    fireEvent.change(inputUser, { target: { value: valuetest}})
    fireEvent.change(inputPassowrd, { target: { value: valuetest}})



    const inputButton = screen.getByRole("button")
    expect(inputButton).not.toBeDisabled();
})


test("loading should not be rendered", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).not.toHaveTextContent(/please wait/i);
  });
  

test("loading should be rendered when click", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
  
    const testValue = "test";
  
    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);
  
    expect(buttonEl).toHaveTextContent(/please wait/i);
  });