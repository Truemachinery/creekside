import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Button.css';

interface ButtonBaseProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    icon?: ReactNode;
}

interface ButtonLinkProps extends ButtonBaseProps {
    to: string;
    href?: never;
    onClick?: never;
}

interface ButtonExternalProps extends ButtonBaseProps {
    href: string;
    to?: never;
    onClick?: never;
}

interface ButtonClickProps extends ButtonBaseProps {
    onClick: () => void;
    to?: never;
    href?: never;
}

type ButtonProps = ButtonLinkProps | ButtonExternalProps | ButtonClickProps;

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon,
    ...props
}: ButtonProps) {
    const buttonClass = `btn btn--${variant} btn--${size} ${className}`;

    const content = (
        <>
            {icon && <span className="btn__icon">{icon}</span>}
            <span className="btn__text">{children}</span>
        </>
    );

    if ('to' in props && props.to) {
        return (
            <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
                <Link to={props.to} className={buttonClass}>
                    {content}
                </Link>
            </motion.div>
        );
    }

    if ('href' in props && props.href) {
        return (
            <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
                <a href={props.href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                    {content}
                </a>
            </motion.div>
        );
    }

    if ('onClick' in props && props.onClick) {
        return (
            <motion.button
                className={buttonClass}
                onClick={props.onClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
                {content}
            </motion.button>
        );
    }

    return null;
}
