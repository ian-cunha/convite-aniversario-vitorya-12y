import React from 'react';
import ravena from '../src/assets/ravena.jpeg';

interface BirthdayInvitationProps {
  name: string;
  date: string;
  location: string;
  style?: React.CSSProperties;
  phoneNumber: string;
}

const BirthdayInvitation: React.FC<BirthdayInvitationProps> = ({ name, date, location, style, phoneNumber }) => {
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
        style={styles.image}
      />
      <h1 style={styles.title}>Você está convidado para o aniversário de {name}!</h1>
      <p style={styles.details}><strong>Data:</strong> {date}</p>
      <p style={styles.details}><strong>Local:</strong> {location}</p>
      <button style={styles.button} onClick={handleRsvp}>Confirmar Presença</button>
    </div>
  );
};

const styles = {
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    display: 'block',
    margin: '0 auto 20px auto',
  },
  title: {
    fontSize: '3em',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
  },
  details: {
    fontSize: '1.3em',
    marginBottom: '25px',
    textAlign: 'center',
  },
  button: {
    padding: '20px 20px',
    fontSize: '20px',
    backgroundColor: '#af4c99',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  }
};

export default BirthdayInvitation;
