import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import classes from './CustomInput.module.css';

type TProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  name: Path<T>;
  hasError?: boolean;
  rules?: Parameters<UseFormRegister<T>>[1];
} & React.ComponentPropsWithRef<'input'>;

const CustomInput = <T extends FieldValues>({ register, name, rules, hasError, ...props }: TProps<T>) => {
  return (
    <input className={`text--s ${classes.inputContent} ${hasError ? classes.error : undefined}`} {...props} {...register(name, rules)} />
  );
};

export default CustomInput;