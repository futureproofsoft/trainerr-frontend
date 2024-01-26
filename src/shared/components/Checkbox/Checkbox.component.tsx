import { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type CheckboxProps = {
  className?: string;
  children?: ReactNode;
  registerProps?: UseFormRegisterReturn<string>;
};

export function Checkbox({
  className,
  children,
  registerProps,
}: CheckboxProps): JSX.Element {
  return (
    <div className="form-control">
      <div className="label justify-normal gap-2">
        <input {...registerProps} type="checkbox" className={`checkbox ${className}`} />
        <span className="label-text">{children}</span>
      </div>
    </div>
  );
}
