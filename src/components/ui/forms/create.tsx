import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  memo,
  ReactNode,
  RefObject,
} from 'react';
import clsx from 'clsx';
import { PropsActionForm } from '@/interfaces/interfaces';

interface HTMLProps {
  children?: ReactNode;
}

type LabelProps = HTMLProps & LabelHTMLAttributes<HTMLLabelElement>;
type InputProps = HTMLProps &
  InputHTMLAttributes<HTMLInputElement> & { ref?: RefObject<HTMLInputElement> };
type ButtonProps = HTMLProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Label({ className, children, ...rest }: LabelProps) {
  return (
    <label className={clsx(`text-2xl`, className)} {...rest}>
      {children}
    </label>
  );
}

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={clsx(
        'p-2 min-w-full border-2 rounded outline-none',
        className
      )}
      {...rest}
    />
  );
}

export function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button className={clsx('p-2 rounded-2xl', className)} {...rest}>
      {children}
    </button>
  );
}

export const FieldName = memo(function FieldName({ state }: PropsActionForm) {
  return (
    <div>
      <Label htmlFor="name">Имя:</Label>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Введите имя..."
        onChange={(e) => {
          if (state.current) {
            state.current.name = e.target.value;
          }
        }}
      />
    </div>
  );
});

export const FieldBirthday = memo(function FieldBirthday({
  state,
}: PropsActionForm) {
  return (
    <div>
      <Label htmlFor="date">Дата рождения:</Label>
      <Input
        type="date"
        id="date"
        onChange={(e) => {
          if (state.current) {
            state.current.date = e.target.value;
          }
        }}
      />
    </div>
  );
});

export function Submit() {
  return (
    <Button type="submit" className="mt-7 bg-black text-2xl text-white ">
      Oтправить
    </Button>
  );
}
