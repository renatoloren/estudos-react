import React from 'react';
import { ButtonModal } from './ButtonModal';
import { Modal } from './Modal';

const App = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>

      <div>{modal ? 'Modal aberto' : 'Modal fechado'}</div>
      <div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
      </div>
    </>
  );
};

export default App;
