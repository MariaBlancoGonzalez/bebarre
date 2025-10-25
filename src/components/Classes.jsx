import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card'; 

export default function Classes() {
  const barreBlocks = [
    'Calentamiento: activación suave para preparar el cuerpo.',
    'Ejercicios en barra: movimientos inspirados en el ballet que desarrollan fuerza y control postural.',
    'Ejercicios en suelo: trabajo de fuerza, core y movilidad.',
    'Estiramientos: vuelta a la calma, liberación de tensiones y relajación final.',
  ];

  const barreBenefits = [
    'Tonificación muscular.',
    'Corrección postural y mayor consciencia corporal.',
    'Flexibilidad y elasticidad.',
    'Incremento de la fuerza y resistencia física.',
    'Fortalecimiento del core.',
  ];

  const postPartoBenefits = [
    'Prevención de la diabetes gestacional.',
    'Disminución del riesgo de hipertensión gestacional.',
    'Reducción de la depresión pre y postnatal.',
    'Prevención de la incontinencia urinaria.',
    'Mejor recuperación postparto.',
  ];

  return (
    <section style={{ width: '100%', padding: '2rem 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Bloque 1 - Barre */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: false }}
          style={{ marginBottom: '3.5rem' }}
        >
          <Card
            imageSrc='/barre.jpg'
            imageAlt='Barre'
            title='Clases barre'
            layout='horizontal'
            imagePosition='left'
            className='bg-white shadow-[0 2px 12px rgba(0,0,0,0.06)]'
            imgClassName='h-[730px] min-w-[320px] max-w-[480px] bg-[#fdf6f0] rounded-none shadow-[0 4px 18px rgba(0,0,0,0.13)]'
          >
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#444', marginBottom: '1rem' }}>
              Las clases de <strong>Barre</strong> duran 60 minutos y se estructuran en bloques:
            </p>
            <ol style={{ paddingLeft: '1.5rem', marginBottom: '1rem', color: '#444' }}>
              {barreBlocks.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.4rem' }}>{item}</li>
              ))}
            </ol>
            <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '0.5rem' }}>
              Utilizamos materiales como gomas, aros, ladrillos de yoga o mancuernas, adaptando la intensidad a cada nivel.
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '1rem', color: '#181818' }}>
              Beneficios:
            </p>
            <ul style={{ paddingLeft: '1.5rem', color: '#444' }}>
              {barreBenefits.map((benefit, i) => (
                <li key={i} style={{ marginBottom: '0.4rem' }}>{benefit}</li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* Bloque 2 - Clases postparto y embarazo */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: false }}
          style={{ marginBottom: '3.5rem' }}
        >
          <Card
            imageSrc='/Embarazo.JPG'
            imageAlt='Embarazo'
            title='Clases postparto y embarazo'
            layout='horizontal'
            imagePosition='right'
            className='bg-white shadow-[0 2px 12px rgba(0,0,0,0.06)]'
            imgClassName='h-[730px] min-w-[320px] max-w-[480px] bg-[#fdf6f0] rounded-none shadow-[0 4px 18px rgba(0,0,0,0.13)] object-left'
          >
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#444', marginBottom: '1rem' }}>
              El <strong>embarazo</strong> es una etapa única, y adaptar el movimiento es fundamental para cuidarte y sentirte bien en cada fase. El ejercicio durante el embarazo aporta bienestar a la madre y también beneficia al bebé y la recuperación postparto.
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#181818' }}>
              Beneficios para la madre:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', color: '#444' }}>
              {postPartoBenefits.map((benefit, i) => (
                <li key={i} style={{ marginBottom: '0.4rem' }}>{benefit}</li>
              ))}
            </ul>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#444' }}>
              Las sesiones incluyen ejercicios de movilidad, fuerza y cardio suave, respetando tus necesidades y el momento del embarazo. Siempre se realiza una valoración fisioterapéutica inicial.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}