import { RootState } from './../redux/store';
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;