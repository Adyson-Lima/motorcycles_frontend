import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Motorcycles from '../pages/Motorcycles';

describe('Testes da tela Motorcycles', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Motorcycles/>
      </BrowserRouter>
    );
  });

  it('existe card em Motorcycles?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

});