import React from "react";
import PropTypes from "prop-types";

/**
 * Reusable Card component.
 *
 * Props:
 * - imageSrc: string (URL de la imagen)
 * - imageAlt: string (alt de la imagen)
 * - title: string
 * - description: string (puede ser cualquier nodo si usas children en su lugar)
 * - footer: string | node (texto pequeño / meta)
 * - layout: "vertical" | "horizontal" (por defecto "vertical")
 * - className: string (clases adicionales para el contenedor)
 * - imgClassName: string (clases adicionales para la imagen)
 * - children: node (si se prefiere pasar contenido personalizado en lugar de description/footer)
 */
export default function Card({
  imageSrc,
  imageAlt = "",
  title,
  description,
  footer,
  layout = "vertical",
  className = "",
  imgClassName = "",
  children,
  ...rest
}) {
  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={
        "flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 " +
        (isHorizontal ? "md:max-w-xl md:flex-row " : "") +
        className
      }
      {...rest}
    >
      {imageSrc && (
        <img
          className={
            "h-96 w-full rounded-t-lg object-cover " +
            (isHorizontal
              ? "md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
              : "") +
            imgClassName
          }
          src={imageSrc}
          alt={imageAlt}
        />
      )}

      <div className="flex flex-col justify-start p-6">
        {title && (
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
        )}

        {children ? (
          <div className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {children}
          </div>
        ) : (
          description && (
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {description}
            </p>
          )
        )}

        {footer && (
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            {footer}
          </p>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  layout: PropTypes.oneOf(["vertical", "horizontal"]),
  className: PropTypes.string,
  imgClassName: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  imageSrc: "",
  imageAlt: "",
  title: "",
  description: "",
  footer: "",
  layout: "vertical",
  className: "",
  imgClassName: "",
  children: null,
};