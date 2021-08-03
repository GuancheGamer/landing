import classNames from 'classnames';

const Alert = ({ variant, title, children }) => (
    <div
        className={classNames('my-8 p-6 border-l-4', {
            'bg-yellow-100 border-yellow-400': variant === 'warning',
            'bg-blue-100 border-blue-400': variant === 'tip',
            'bg-red-100 border-red-400': variant === 'danger',
        })}
    >
        {variant === 'warning' && (
            <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">{title ?? 'Warning'}</div>
        )}
        {variant === 'tip' && (
            <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">{title ?? 'Tip'}</div>
        )}
        {variant === 'danger' && (
            <div className="uppercase tracking-wide text-sm text-red-500 font-semibold">{title ?? 'Caution'}</div>
        )}

        <div
            className={classNames('text-lg children', {
                'text-yellow-700': variant === 'warning',
                'text-blue-900': variant === 'tip',
                'text-red-900': variant === 'danger',
            })}
        >
            {children}
        </div>

        <style jsx>{`
            .children :global(p) {
                margin: 0.5rem 0;
            }
            .children :global(*) {
                color: inherit;
            }
        `}</style>
    </div>
);

export default Alert;
