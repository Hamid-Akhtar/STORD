import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ShortUrl from "./@modules/shortUrl/ShortUrl"
import '@testing-library/jest-dom/extend-expect'

describe("Tests for modules", () => {
  test('Render App with Title', () => {
    render(<App />);
    const linkElement = screen.getByText(/URL Shortener/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Render ShortUrl with Title', () => {
    render(<ShortUrl />);
    const linkElement = screen.getByText(/URL Shortener/i);
    expect(linkElement).toBeInTheDocument();
  });

  const Button = ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
  )
  test('Testing Callback Function called on Shorten URL button', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Shorten URL</Button>)
    fireEvent.click(screen.getByText(/Shorten URL/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test("Text Field Updating with new Value and handleChange Props", async () => {
    const { rerender, queryByTestId, getByText } = render(
      <ShortUrl />
    );
    fireEvent(
      queryByTestId("Url-field"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    let textField = queryByTestId("bio");
    expect(getByText('URL Shortener')).toBeInTheDocument();
    expect(textField).toBeTruthy();
    const input = screen.getByTestId("bio");
    fireEvent.change(input, { target: { value: 'new value' } });
    rerender()
    expect(input.value).toEqual('new value');
  })

  test("Text Field Validation REQUIRED Prop", async () => {
    const { queryByTestId } = render(
      <ShortUrl />
    );
    fireEvent(
      queryByTestId("Url-field"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    const input = screen.getByTestId("bio");
    expect(input.required).toBe(true)
    expect(input.type).toBe('text')
  })

  test("Text Field Validation Input type is text", async () => {
    const { queryByTestId } = render(
      <ShortUrl />
    );
    fireEvent(
      queryByTestId("Url-field"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    const input = screen.getByTestId("bio");
    expect(input.type).toBe('text')
  })
});