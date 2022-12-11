import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //expect output to be 'learn react'
  // const linkElement = screen.getByText(/Learn React/i);
  // //to check if item is exist 
  // expect(linkElement).toBeInTheDocument();
});


// test('render the listItem', () => {
//   render(<App />);
//   //expect List item, get all list item
//   const listItem = screen.getAllByRole("listitem");
//   //check the match qualities
//   expect(listItem.length).toBe(3);
// });



// test('render the mytestID expected to be 6' , () => {
//   render(<App />);
//   //expect List item, get all list item
//   const title = screen.getByTestId("mytest");
//   //check the match qualities
//   expect(title).toBeInTheDocument();

// });

// test('sum should be equal to 4' , () => {
//   render(<App />);
//   //expect List item, get all list item
//   const sum = screen.getByTitle("sum");
//   //check the match qualities
//   expect(sum.textContent).toBe("4");

// });
