import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ShortUrl from "./@modules/shortUrl/ShortUrl"
import ShortUrlRender from "./@modules/shortUrlRender/ShortUrlRender";
import '@testing-library/jest-dom/extend-expect'

jest.mock('./@modules/shortUrl/ShortUrl');
jest.mock('./@modules/shortUrlRender/ShortUrlRender');
describe("App Test Cases", () => {
  test("Testing App routes", () => {
    ShortUrl.mockImplementation(() => <div>URL Shortener</div>);
    ShortUrlRender.mockImplementation(() => <div>URL Shortener Render</div>);
    render(
      <BrowserRouter>
        <ShortUrl />
        <ShortUrlRender />
      </BrowserRouter>
    );
    expect(screen.getByText("URL Shortener")).toBeInTheDocument();
    expect(screen.getByText("URL Shortener Render")).toBeInTheDocument();
  });
})
