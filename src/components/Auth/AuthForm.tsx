import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldErrors, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store';
import CustomButton from '../UI/CustomButton';
import CustomInputWrapper from './CustomInputWrapper';
import CustomInput from './CustomInput';
import { loginUser, registerUser } from '../../utils/http';
import { LogIn } from '../../store/auth-actions';
import { ROUTES } from '../../utils/routes';
import { TAuthFormValues, TAuthMode } from '../../models/auth';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [authMode, setAuthMode] = useState<TAuthMode>('signup');
  const [passwoedIsVisible, setPasswordIsVisible] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<TAuthFormValues>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      repassword: ''
    },
    mode: 'onSubmit'
  });


  const { register, handleSubmit, formState, reset, setError } = form;
  const { errors, isSubmitting } = formState;

  const handleChangeMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
    reset();
  }

  const onSubmit = async (data: TAuthFormValues) => {
    if (authMode === 'signup' && data.password !== data.repassword) {
      setError('repassword', {
        type: 'manual',
        message: 'Пароли не совпадают'
      });
      return;
    }

    try {
      //Далее вставляю моковые данные для этого API
      const data = authMode === 'signup' ?
        await registerUser('eve.holt@reqres.in', 'pistol') :
        await loginUser('eve.holt@reqres.in', 'cityslicka');
      dispatch(LogIn(data.token));
      navigate(ROUTES.MAIN)
    } catch (error) {
      setError('root', {
        type: 'manual',
        message: 'Ошибка'
      })
    }
  };

  const onError = (errors: FieldErrors<TAuthFormValues>) => {
    console.log('Form errors', errors)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate className={classes.authForm}>
      <h2 className={`title title--s`}>{authMode === 'signin' ? 'Вход' : 'Регистрация'}</h2>
      {authMode === 'signup' && (<CustomInputWrapper id='username' label='Имя' errors={errors.username?.message}>
        <CustomInput
          type='text'
          id='username'
          placeholder='Артур'
          name="username"
          register={register}
          rules={{
            required: {
              value: true,
              message: 'Введите имя пользователя'
            },
            minLength: {
              value: 3,
              message: 'Минимальная длина имени - 3 символа'
            }
          }}
        />
      </CustomInputWrapper>)}
      <CustomInputWrapper id='email' label='Электронная почта' errors={errors.email?.message}>
        <CustomInput
          type='email'
          id='email'
          placeholder='example@mail.ru'
          name="email"
          register={register}
          rules={{
            required: {
              value: true,
              message: 'Введите вашу почту'
            },
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Неправильный формат'
            },
          }}
        />
      </CustomInputWrapper>
      <CustomInputWrapper
        id='password'
        label='Пароль'
        hasIcon
        onChangeVisibility={() => setPasswordIsVisible(prev => !prev)}
        errors={errors.password?.message}>
        <CustomInput
          type={passwoedIsVisible === true ? 'text' : 'password'}
          id='password'
          placeholder='******'
          name="password"
          register={register}
          rules={{
            required: {
              value: true,
              message: 'Введите пароль'
            },
            minLength: {
              value: 6,
              message: 'Минимальная длина пароля - 6 символов'
            }
          }}
        />
      </CustomInputWrapper>
      {
        authMode === 'signup' && (
          <CustomInputWrapper
            id='repassword'
            label='Подтвердите пароль'
            hasIcon
            onChangeVisibility={() => setPasswordIsVisible(prev => !prev)}
            errors={errors.repassword?.message}>
            <CustomInput
              type={passwoedIsVisible === true ? 'text' : 'password'}
              id='repassword'
              placeholder='******'
              name="repassword"
              register={register}
              rules={{
                required: {
                  value: true,
                  message: 'Введите пароль'
                },
                minLength: {
                  value: 6,
                  message: 'Минимальная длина пароля - 6 символов'
                }
              }}
            />
          </CustomInputWrapper>)
      }
      <CustomButton color='white' type="submit" className={classes.authFormButton} disabled={isSubmitting}>
        {authMode === 'signin' ? 'Войти' : 'Зарегистрироваться'}
      </CustomButton>
      {errors && errors.root && <span className="error">{errors.root.message}</span>}
      <button
        type='button'
        className={classes.authFormLink}
        onClick={handleChangeMode}
      >
        {authMode === 'signin' ? 'Нет аккаунта? Регистрация' : 'Есть аккаунт? Войти'}
      </button>
    </form >
  );
};

export default AuthForm;