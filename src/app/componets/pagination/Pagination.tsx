export const Pagination = () =>{
    return (<>
    
<div className="flex items-center justify-center py-10 w-full  p-3">


<ol className="flex justify-center gap-1 text-xs font-medium">
  <li>
    <a
      href="#"
      className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-[#ef4444] text-gray-900 rtl:rotate-180"
    >
      <span className="sr-only">Prev Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="#FFFFFF"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
    >
      1
    </a>
  </li>

  <li className="block h-8 w-8 rounded border-[#ef4444] bg-[#ef4444] text-center leading-8 text-white">
    2
  </li>

  <li>
    <a
      href="#"
      className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
    >
      3
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
    >
      4
    </a>
  </li>
  <li>
    <a
      href="#"
      className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
    >
      5
    </a>
  </li>
  <li>
    <a
      href="#"
      className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
    >
      6
    </a>
  </li>
  <li>
    <a
      href="#"
      className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
    >
    ...
    </a>
  </li>
  <li>
    <a
      href="#"
      className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
    >
    12
    </a>
  </li>

  <li>
    <a
      href="#"
      className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-[#ef4444] text-gray-900 rtl:rotate-180"
    >
      <span className="sr-only">Next Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="#FFFFFF"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </li>
</ol>
    </div>
    
    
    
    </>)
}