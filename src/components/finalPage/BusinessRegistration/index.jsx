import React, { useContext } from 'react';
import parse from 'html-react-parser';
import { ServiceDataContext } from '@/components';
import Image from 'next/image';
import Button from './button';

const TableContent = () => {
  const { data } = useContext(ServiceDataContext);
  if (!data || !data.table || data.table.length === 0) {
    return null; // Return early if there's no data
  }

  const table = data.table[0];
  const headings = table.headings;
  const rows = table.rows;

  return (
    <>
    <div className="flex r overflow-x-auto max-w-[1200px] m-auto bg-white p-4 ">
      <table className="border border-gray-300 w-full text-left bg-gradient-to-tr from-[#3d709f] to-white">
        <thead>
          <tr className="">
            {headings.map((heading, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.map((data, columnIndex) => (
                <td
                  key={columnIndex}
                  className={`border border-gray-300 px-4 py-2 ${columnIndex === rowData.length - 1 ? 'border-r-0' : ''} align-top`}
                >
                  {Array.isArray(data) ? (
                    <ul>
                      {data.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-2">
                          <Image src="Vector.svg" alt="img" width={15} height={15}/>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    parse(data)
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Button/>
    </>
  );
};

export default TableContent;
