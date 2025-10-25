import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Card component.
 * - imageSrc: url de la imagen
 * - imageAlt: alt de la imagen
 * - title: título (opcional)
 * - children: contenido (texto/JSX)
 * - layout: 'vertical' | 'horizontal' (horizontal usará flex-row en md)
 * - imagePosition: 'left' | 'right' (solo para layout horizontal)
 * - className: clases para el contenedor principal
 * - imgClassName: clases para la etiqueta <img>
 * - contentClassName: clases para el contenedor del contenido (útil para bg blanco, padding, etc.)
 */
export default function Card({
  imageSrc,
  imageAlt = '',
  title,
  children,
  layout = 'vertical',
  imagePosition = 'left',
  className = '',
  imgClassName = '',
  contentClassName = '',
  ...rest
}) {
  const isHorizontal = layout === 'horizontal';
  const imageOnLeft = imagePosition === 'left';

  return (
    <div
      className={
        'flex flex-col ' +
        (isHorizontal ? 'md:flex-row ' : '') +
        'shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ' +
        className
      }
      {...rest}
    >
      {imageSrc && imageOnLeft && (
        <img
          className={'object-cover w-full ' + imgClassName}
          src={imageSrc}
          alt={imageAlt}
        />
      )}

      <div className={'flex flex-col justify-start ' + contentClassName}>
        {title && (
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
        )}

        {children && (
          <div className="text-base text-neutral-600 dark:text-neutral-200">
            {children}
          </div>
        )}
      </div>

      {imageSrc && !imageOnLeft && (
        <img
          className={'object-cover w-full ' + imgClassName}
          src={imageSrc}
          alt={imageAlt}
        />
      )}
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
  imagePosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  imgClassName: PropTypes.string,
  contentClassName: PropTypes.string,
};

Card.defaultProps = {
  imageSrc: '',
  imageAlt: '',
  title: '',
  children: null,
  layout: 'vertical',
  imagePosition: 'left',
  className: '',
  imgClassName: '',
  contentClassName: '',
};