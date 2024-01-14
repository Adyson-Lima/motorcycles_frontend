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

  it('Existe card em Motorcycles?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe link Novo em Motorcycles?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it('Existe tabela em Motorcycles?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

  it('Existe botão editar em Motorcycles?', () => {
    expect(screen.getByTestId('mybtn1')).toBeInTheDocument();
  });

  it('Existe botão excluir em Motorcycles?', () => {
    expect(screen.getByTestId('mybtn2')).toBeInTheDocument();
  });

});