import React from 'react';
import ravena from '../src/assets/ravena.jpeg';

interface BirthdayInvitationProps {
  name: string;
  date: string;
  location: string;
  style?: React.CSSProperties;
  phoneNumber: string;
}

const BirthdayInvitation: React.FC<BirthdayInvitationProps> = ({
  name,
  date,
  location,
  style,
  phoneNumber,
}) => {
  const handleRsvp = () => {
    const message = `Olá! Confirmo minha presença no aniversário de ${name} no dia ${date}, no local ${location}!!!`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div style={style}>
      <img
        src={ravena}
        alt="Aniversário"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          display: 'block',
          margin: '0 auto 20px auto',
        }}
      />
      <h1 style={{
        fontSize: '3em',
        fontWeight: 'bold',
        marginBottom: '10px',
        textAlign: 'center',
      }}>
        Você está convidado para o aniversário de {name}!
      </h1>
      <p style={{
        fontSize: '1.3em',
        marginBottom: '25px',
        textAlign: 'center',
      }}>
        <strong>Data:</strong> {date}
      </p>
      <p style={{
        fontSize: '1.3em',
        marginBottom: '25px',
        textAlign: 'center',
      }}>
        <strong>Local:</strong> {location}
      </p>
      <button
        style={{
          padding: '20px 20px',
          fontSize: '20px',
          backgroundColor: '#af4c99',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
        }}
        onClick={handleRsvp}
      >
        Confirmar Presença
      </button>
    </div>
  );
};

export default BirthdayInvitation;
