"use client";

type Props = {
  reset: () => void;
};

const Error = (props: Props) => {
  return (
    <div>
      Ops! Não foi possível carregar os usuários
      <button onClick={() => props.reset()}>Tentar novamente</button>
    </div>
  );
};

export default Error;
