import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  RefObject,
} from 'react';
import clsx from 'clsx';

interface HTMLProps {
  children?: ReactNode;
}

type LabelProps = HTMLProps & LabelHTMLAttributes<HTMLLabelElement>;
type InputProps = HTMLProps & InputHTMLAttributes<HTMLInputElement> & { ref?: RefObject<HTMLInputElement> };
type ButtonProps = HTMLProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Label({ className, children, ...rest }: LabelProps) {
  return (
    <label className={clsx(`text-2xl`, className)} {...rest}>
      {children}
    </label>
  );
}

export function Input({ className, ...rest }: InputProps) {
  return <input className={clsx('p-2 min-w-full border-2 rounded outline-none', className)} {...rest} />;
}

export function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button className={clsx('p-2 rounded-2xl', className)} {...rest}>
      {children}
    </button>
  );
}

export function FieldName() {
  return (
    <div>
      <Label htmlFor="name">Имя:</Label>
      <Input type="text" name="name" id="name" placeholder="Введите имя..." />
    </div>
  );
}

export function FieldBirthday() {
  return (
    <div>
      <Label htmlFor="date">Дата рождения:</Label>
      <Input type="date" id="date" />
    </div>
  );
}

export function Submit() {
  return (
    <Button
      type="submit"
      className="mt-7 bg-black text-2xl text-white "
    >
      Oтправить
    </Button>
  );
}
