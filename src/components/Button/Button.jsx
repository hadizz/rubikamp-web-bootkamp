import clsx from 'clsx';
import styles from './Button.module.css';

const Button = ({
    size = "medium",
    type = "primary",
    variant ="fill",
    className,
    children,
    onClickHandler,
    ...props
}) => {
    return (
        <button
            type="submit"
            className={clsx(
                styles.root,
                // ---- size
                size === 'small' && styles.sizeSmall,
                size === 'medium' && styles.sizeMedium,
                size === 'large' && styles.sizeLarge,
                // --- type
                type === 'primary' && styles.typePrimary,
                type === 'error' && styles.typeError,
                type === 'gray' && styles.typeGray,
                // --- variant
                variant === 'fill' && styles.variantFill,
                variant === 'outline' && styles.variantOutline,

                className
            )}
            onClick={(e) => {
                // optional
                onClickHandler?.(e.target);
            }}
            {...props}
            >
                {children}
        </button>
    );
};

export default Button;