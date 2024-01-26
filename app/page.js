import Link from 'next/link';

const Homepage = () => {
  const stack = [
    {
      title: 'Next.js',
      description:
        'Harnessing the power of the latest React.js hooks for efficient development.',
    },
    {
      title: 'Prisma',
      description:
        'A modern database toolkit that simplifies database access with type-safe queries.',
    },
    {
      title: 'Server Components',
      description:
        'Revolutionizing the way we build UIs by enabling server-rendered components.',
    },
    {
      title: 'App Router',
      description:
        'Navigating seamlessly with an efficient and flexible routing solution.',
    },
    {
      title: 'ZOD',
      description:
        'Ensuring data integrity and security through schema validation.',
    },
    {
      title: 'Tailwind CSS',
      description:
        'Streamlining styling with a utility-first CSS framework for a sleek and responsive design.',
    },
    {
      title: 'DaisyUI',
      description:
        'Enhancing the user interface with a collection of beautiful and customizable UI components.',
    },
  ];

  return (
    <div className='flex flex-col bg-base-300 min-h-[50vh] gap-y-8 px-5 py-8 rounded-lg'>
      <div className='flex flex-col'>
        <article className='flex flex-col px-3 gap-y-5'>
          <h1 className='text-5xl font-bold'>Welcome to Tusky App!</h1>
          <p className='py-3 text-xl leading-7'>
            Tusky is a compact yet robust full-stack application designed for
            managing everyday tasks seamlessly. This example showcases the
            synergy of server-side and client-based components, offering
            features like form validation, CRUD operations, and dynamic fetching
            from an external relational database - all within a React JS
            functional component.
          </p>
        </article>
      </div>

      {/* Tech Stack */}

      <article className='flex flex-col gap-y-5'>
        <h2 className='pl-10 mb-1 text-3xl'>Tech Stack</h2>
        <ul className='flex flex-col gap-y-3'>
          {stack.map((item, idx) => {
            return (
              <li
                className='flex flex-col items-center justify-between md:flex-row gap-x-5'
                key={idx}
              >
                <div className='px-8 py-6 text-lg  w-full md:w-[250px] badge badge-primary badge-outline hover:bg-white hover:text-black hover:border-black'>
                  {item.title}
                </div>
                <aside className='py-3 pl-3 text-lg md:pl-0 md:py-0 md:w-3/4'>
                  {item.description}
                </aside>
              </li>
            );
          })}
        </ul>
      </article>
      <a href='/tasks' className='w-[200px] self-center btn btn-primary'>
        Get Started
      </a>
    </div>
  );
};
export default Homepage;
