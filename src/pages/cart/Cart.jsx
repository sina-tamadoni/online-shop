// import { Fragment, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";

// const products = [
//   {
//     id: 1,
//     name: "Throwback Hip Bag",
//     href: "#",
//     color: "Salmon",
//     price: "$90.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
//     imageAlt:
//       "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
//   },
//   {
//     id: 2,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     color: "Blue",
//     price: "$32.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   // More products...
// ];

// export default function Cart() {
//   const [open, setOpen] = useState(true);

//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="relative z-50" onClose={setOpen}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-in-out duration-500"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in-out duration-500"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 overflow-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transform transition ease-in-out duration-500 sm:duration-700"
//                 enterFrom="translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transform transition ease-in-out duration-500 sm:duration-700"
//                 leaveFrom="translate-x-0"
//                 leaveTo="translate-x-full"
//               >
//                 <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
//                   <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
//                     <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
//                       <div className="flex items-start justify-between">
//                         <Dialog.Title className="text-lg font-medium text-gray-900">
//                           Shopping cart
//                         </Dialog.Title>
//                         <div className="ml-3 flex h-7 items-center">
//                           <button
//                             type="button"
//                             className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
//                             onClick={() => setOpen(false)}
//                           >
//                             <span className="absolute -inset-0.5" />
//                             <span className="sr-only">Close panel</span>
//                             <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                           </button>
//                         </div>
//                       </div>

//                       <div className="mt-8">
//                         <div className="flow-root">
//                           <ul
//                             role="list"
//                             className="-my-6 divide-y divide-gray-200"
//                           >
//                             {products.map((product) => (
//                               <li key={product.id} className="flex py-6">
//                                 <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                                   <img
//                                     src={product.imageSrc}
//                                     alt={product.imageAlt}
//                                     className="h-full w-full object-cover object-center"
//                                   />
//                                 </div>

//                                 <div className="ml-4 flex flex-1 flex-col">
//                                   <div>
//                                     <div className="flex justify-between text-base font-medium text-gray-900">
//                                       <h3>
//                                         <a href={product.href}>
//                                           {product.name}
//                                         </a>
//                                       </h3>
//                                       <p className="ml-4">{product.price}</p>
//                                     </div>
//                                     <p className="mt-1 text-sm text-gray-500">
//                                       {product.color}
//                                     </p>
//                                   </div>
//                                   <div className="flex flex-1 items-end justify-between text-sm">
//                                     <p className="text-gray-500">
//                                       Qty {product.quantity}
//                                     </p>

//                                     <div className="flex">
//                                       <button
//                                         type="button"
//                                         className="font-medium text-indigo-600 hover:text-indigo-500"
//                                       >
//                                         Remove
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//                       <div className="flex justify-between text-base font-medium text-gray-900">
//                         <p>Subtotal</p>
//                         <p>$262.00</p>
//                       </div>
//                       <p className="mt-0.5 text-sm text-gray-500">
//                         Shipping and taxes calculated at checkout.
//                       </p>
//                       <div className="mt-6">
//                         <a
//                           href="#"
//                           className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//                         >
//                           Checkout
//                         </a>
//                       </div>
//                       <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
//                         <p>
//                           or{" "}
//                           <button
//                             type="button"
//                             className="font-medium text-indigo-600 hover:text-indigo-500"
//                             onClick={() => setOpen(false)}
//                           >
//                             Continue Shopping
//                             <span aria-hidden="true"> &rarr;</span>
//                           </button>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }

import React from "react";
import { useCart } from "../../contexts/CartContext";
import EmptyCart from "../../components/EmptyCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faMinus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import CartSidebar from "../../components/CartSidebar";

function Cart() {
  const { state, dispatch } = useCart();
  const { selectedItems } = state;
  if (!selectedItems.length) {
    return <EmptyCart />;
  }
  return (
    <div>
      <div className="flex flex-col gap-5 m-10 p-5 border border-blue-900 rounded-md h-fit">
        <h2 className="px-5 py-6 flex items-center text-center text-3xl font-sans font-bold">
          Shopping Cart
        </h2>

        <div className="flex gap-7 justify-between items-start">
          <div className="flex w-2/3 flex-col first:border-t first:border-stone-300 [&:nth-last-child(1)]:border-b-none *:border-b *:border-stone-300">
            {selectedItems.map((item) => (
              <div className="flex w-full h-60" key={item.id}>
                <div className="flex-1 flex gap-5 py-4">
                  <div className="w-1/4 h-full border border-dashed border-blue-900 rounded-lg p-3">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full mix-blend-darken"
                    />
                  </div>
                  <div className="flex flex-col justify-between items-start w-3/4">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold font-sans text-lg text-stone-800">
                        {item.title.split(" ").slice(0, 5).join(" ")}
                      </span>
                      <span className="font-semibold text-stone-600 font-sans">
                        ${item.price}
                      </span>
                    </div>
                    <div className="border bg-white w-20 flex justify-center items-center rounded-md overflow-hidden border-blue-900">
                      {item.quantity === 1 ? (
                        <div className="text-blue-900 text-center w-full h-full py-1 border-r border-blue-900 cursor-pointer">
                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() =>
                              dispatch({ type: "REMOVE", payload: item })
                            }
                          />
                        </div>
                      ) : item.quantity > 1 ? (
                        <button
                          className="text-blue-900 text-center w-full h-full py-1 border-r border-blue-900"
                          onClick={() =>
                            dispatch({ type: "DECREASE", payload: item })
                          }
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      ) : null}

                      <span className="px-2 font-sans text-center text-blue-900 text-sm font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        className="text-blue-900 text-center w-full h-full py-1 border-l border-blue-900"
                        onClick={() =>
                          dispatch({ type: "INCREASE", payload: item })
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="py-5 cursor-pointer text-stone-500 tooltip"
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                >
                  <FontAwesomeIcon icon={faXmark} />
                  <span className="returnTooltip bottom-56 py-1 px-0">
                    Remove
                  </span>
                </div>
              </div>
            ))}
          </div>

          <CartSidebar />
        </div>
      </div>
    </div>
  );
}

export default Cart;
