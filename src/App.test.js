import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




const num = [1, 3, 5 ,7, 9, 11];
console.log("The orginal array is " + num);

const square_array = num.map(function(a) {
    return a * a;
});



console.log("The square" + square_array)






const names = ["anish", "bikash", "inas", "nitika", "pankaj", "puja", "radha", "romeo", "sagar", "sandip", "sohan", "suhit"]
console.log(names);
const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
});


console.log(capitalized);




