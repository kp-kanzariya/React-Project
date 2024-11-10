import React from 'react';
import { useForm } from 'react-hook-form';

function HookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true })} placeholder="First Name" />
      {errors.firstName && <p>First name is required</p>}
      
      <input {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} placeholder="Email" />
      {errors.email && <p>Invalid email address</p>}
      
      <input type="submit" />
    </form>
  );
}

export default HookForm;
