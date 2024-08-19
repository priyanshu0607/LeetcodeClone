import { atom } from "recoil";

type AuthModalState = {
  isOpen: boolean;
  type: "login" | "register" | "forgotPassword";
};

const initalAuthModalState: AuthModalState = {
  isOpen: false,
  type: "login",
};

const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: initalAuthModalState,
});

export { authModalState };

