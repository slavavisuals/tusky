import { createTask } from '@/utils/actions';

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className='w-full join'>
        <input
          type='text'
          className='w-full input input-bordered join-item'
          placeholder='type here'
          name='content'
          required
        />
        <button type='submit' className='btn btn-primary join-item'>
          create task
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
