"use client";
import Button from "./Button";
import QuantityButtonGroup from "./QuantityButtonGroup";
import { useState, FC } from "react";
import Modal from "react-modal";
import { ProductProps } from "@/lib/types";
import Image from "next/image";
import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

Modal.setAppElement("#root");

const CartButton: FC<ProductProps> = ({ product, count, className }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "rgb(249 250 251)",
    },
  };

  const { data: session } = useSession();
  // console.log('cartButton session:', session)
  function openModal() {
    if(!session){
      router.push('/signin?callbackurl=/shop')
    }
    else{
      setIsOpen(true);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button className={className} size={"small"} onClick={openModal}>
        Add To Cart
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col items-center px-6">
          <h2 className="text-xl font-semibold text-stone-700 tracking-wide mb-4">
            {product.name}
          </h2>
          <div className="relative" style={{ height: "200px", width: "200px" }}>
            <Image
              className="object-cover rounded-lg"
              src={product.url}
              fill
              alt={product.name}
            />
          </div>
          <div className="w-full flex items-center justify-between my-2">
            <p className="text-xl font-medium text-stone-500 tracking-wide">
              <span className="font-normal mr-1">$</span>
              {product.price}
            </p>
            <p>
              {product.stock > 5 ? (
                <span className="text-lg text-green-700 font-semibold">
                  In Stock
                </span>
              ) : (
                <span className="text-xl text-yellow-500 font-semibold">
                  {product.stock} Left
                </span>
              )}
            </p>
          </div>
          {session && (
            <QuantityButtonGroup
              product={product}
              count={count}
              closeModal={closeModal}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default CartButton;
