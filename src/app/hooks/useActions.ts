import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { allActions } from "../store/rootActions";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
