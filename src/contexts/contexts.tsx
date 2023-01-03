import { createContext } from "react";

export type ImageContent = {
  image: string;
  setImage: (c: string) => void;
};
export const ImageContext = createContext<ImageContent>({
  image: "", // set a default value
  setImage: () => {},
});

export type TokenContent = {
  token: string;
  setToken: (c: string) => void;
};
export const TokenContext = createContext<TokenContent>({
  token: "", // set a default value
  setToken: () => {},
});
