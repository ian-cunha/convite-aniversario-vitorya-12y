import React from 'react';
import BirthdayInvitation from './BirthdayInvitation';

const App: React.FC = () => {
  return (
    <div>
      <BirthdayInvitation
        phoneNumber="5581989672069"
        name="Vitorya"
        date="10 de Dez de 2024"
        location="Rua Eletricista José Alves Ribeiro, 52B, Cavaleiro"
        style={{
          backgroundColor: '#f7acf0',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
  );
};

export default App;
