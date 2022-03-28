import React from "react";
import { Product } from "../models/Product";

interface Props {
  item: Product;
}

function ListItem(props: Props) {
  return (
    <tr
      tabIndex={0}
      className="focus:outline-none h-16 border border-gray-100 rounded"
    >
      <td>
        <div className="ml-5">
          <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
            <input
              placeholder="checkbox"
              type="checkbox"
              className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
            />
            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
              <svg
                className="icon icon-tabler icon-tabler-check"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </div>
          </div>
        </div>
      </td>
      <td className="">
        <div className="flex items-center pl-5">
          <p className="text-base font-medium leading-none text-gray-700 mr-2">
            {props.item.name}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676"
              stroke="#3B82F6"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333"
              stroke="#3B82F6"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </td>
      <td className="pl-24">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <circle
              cx="7.50004"
              cy="7.49967"
              r="1.66667"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></circle>
          </svg>
          <p className="text-sm leading-none text-gray-600 ml-2">
            {props.item.product_type?.name}
          </p>
        </div>
      </td>
      <td className="pl-5">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.5 5H16.6667"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.5 10H16.6667"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.5 15H16.6667"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.16669 5V5.00667"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.16669 10V10.0067"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.16669 15V15.0067"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="text-sm leading-none text-gray-600 ml-2">
            {new Date(props.item.created_at).toISOString().slice(0, 10)}
          </p>
        </div>
      </td>

      <td className="pl-5">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="text-sm leading-none text-gray-600 ml-2">
            {props.item.assigned_attributes[0].attribute_value.name}
          </p>
        </div>
      </td>
      <td className="pl-5">
        <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">
          {props.item._id}
        </button>
      </td>
      <td className="pl-4">
        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
          Edit
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
