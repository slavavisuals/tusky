'use client';
import { createTaskCustom } from '@/utils/actions';
import { createRef, useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='btn btn-primary join-item'
      disabled={pending}
    >
      {pending ? 'please wait...' : 'create task'}
    </button>
  );
};

const initialState = {
  message: null,
};

const ref = createRef();

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === 'error') {
      toast.error('Error. Task should be at least 5 character');
      return;
    }
    if (state.message) {
      toast.success('task created');
      ref.current.reset();
    }
  }, [state]);
  return (
    <form ref={ref} action={formAction}>
      {/* {state.message ? <p className='mb-2'>{state.message}</p> : null} */}
      <div className='w-full join'>
        <input
          type='text'
          className='w-full input input-bordered join-item'
          placeholder='type here'
          name='content'
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};
export default TaskForm;
