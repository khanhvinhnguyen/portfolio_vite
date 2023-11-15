import React from 'react'

type WorkItemProps = {
  year?: string | number;
  company?: string;
  roles?: string;
  details?: JSX.Element | string;
} & React.HTMLProps<HTMLDivElement>;

const WorkItem = (props: WorkItemProps) => {
  const { year, company, roles, details } = props;

  return (
    <ol className='flex flex-col md:flex-row relative border-l-2 border-stone-200'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
        <p className='mb-1.5 flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 rounded-lg bg-[#001b5e] text-white font-semibold '>{year}</span>
          <span className='text-[#001b5e] font-semibold text-lg'>{company}</span>
        </p>
        <span className='text-stone-500 text-md leading-none'>{roles}</span>
        <p className='my-2 text-bases text-stone-500'>{details}</p>
      </li>
    </ol>
  )
}

export default WorkItem