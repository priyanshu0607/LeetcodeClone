import { authModalState } from "@/atoms/authModalAtom";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";
import { useRecoilValue, useSetRecoilState } from "recoil";

// Define the props for AuthModal if needed
type AuthModalProps = {};

// Component Definition
const AuthModal: React.FC<AuthModalProps> = () => {
  // Recoil state for modal
  const authModal = useRecoilValue(authModalState);
  
  // Custom hook to handle modal closing
  const closeModal = useCloseModal();

  return (
    <>
      {/* Modal Backdrop */}
      {authModal.isOpen && (
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-40"
          onClick={closeModal}
        ></div>
      )}

      {/* Modal Container */}
      {authModal.isOpen && (
        <div className="w-full sm:w-[450px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center z-50">
          <div className="relative w-full h-full mx-auto flex items-center justify-center">
            <div className="bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6">
              {/* Close Button */}
              <div className="flex justify-end p-2">
                <button
                  type="button"
                  className="bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white"
                  onClick={closeModal}
                >
                  <IoClose className="h-5 w-5" />
                </button>
              </div>

              {/* Conditional Rendering of Auth Components */}
              {authModal.type === "login" ? (
                <Login />
              ) : authModal.type === "register" ? (
                <Signup />
              ) : (
                <ResetPassword />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;

// Custom Hook for Closing Modal
function useCloseModal() {
  const setAuthModal = useSetRecoilState(authModalState);

  // Close Modal Function
  const closeModal = () => {
    setAuthModal((prev) => ({ ...prev, isOpen: false, type: "login" }));
  };

  // Effect for Esc Key Handling
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return closeModal;
}

