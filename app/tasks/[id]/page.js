import EditForm from '@/components/EditForm';
import { getTask } from '@/utils/actions';
import Link from 'next/link';

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.id);
  return (
    <>
      <div className=''>
        <Link href='/tasks' className='mb-10 btn btn-accent '>
          back to tasks
        </Link>
        <EditForm task={task} />
      </div>
    </>
  );
};
export default SingleTaskPage;
