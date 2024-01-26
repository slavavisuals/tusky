import { editTask } from '@/utils/actions';

const EditForm = ({ task }) => {
  const { id, completed, content } = task;
  return (
    <form
      action={editTask}
      className='max-w-[80%] p-12 border rounded-lg border-base-300'
    >
      <input type='hidden' name='id' value={id} />
      {/* content */}
      <input
        type='text'
        required
        defaultValue={content}
        name='content'
        className='w-full input input-bordered'
      />
      {/* completed */}
      <div className='my-4 form-control'>
        <label htmlFor='completed' className='cursor-pointer label'>
          <span className='text-lg capitalize label-text'>Completed</span>
          {/* <input
            type='checkbox'
            defaultChecked={completed}
            id='completed'
            name='completed'
            className='checkbox checkbox-primary checkbox-md'
          /> */}
          <input
            type='checkbox'
            name='completed'
            id='completed'
            defaultChecked={completed}
            className='toggle toggle-primary'
          />
        </label>
      </div>
      <button type='submit' className='btn btn-primary btn-block btn-md'>
        update
      </button>
    </form>
  );
};
export default EditForm;
