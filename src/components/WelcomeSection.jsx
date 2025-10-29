import React, { useState, useEffect } from "react";

export default function WelcomeSection({ id }) {
  const [displayedLines, setDisplayedLines] = useState(["", "", ""]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const lines = [
    "En BeBarreFit Studio te invitamos a descubrir el poder transformador del ejercicio físico",
    "combinado con la elegancia del ballet y la serenidad del mindfulness.",
    "Únete a nuestra comunidad y comienza tu viaje hacia un bienestar completo hoy mismo."
  ];

  useEffect(() => {
    if (isComplete) return;

    if (currentLine >= lines.length) {
      setIsComplete(true);
      return;
    }

    const currentText = lines[currentLine];
    
    if (currentChar < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = currentText.substring(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(prev => prev + 1);
      }, 50);
      
      return () => clearTimeout(timer);
    } else {
      // Pausa breve entre líneas
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [currentChar, currentLine, isComplete, lines]);

  return (
    <section id={id} className="welcome-section">
      <div className="welcome-container">
        <h2 className="welcome-title">
          Bienvenida a BeBarreFit Studio
        </h2>
        <div className="typewriter-container">
          <div className="typewriter-lines">
            {displayedLines.map((line, index) => (
              <p key={index} className="typewriter-line">
                {line}
                {!isComplete && currentLine === index && (
                  <span className="typewriter-cursor">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}