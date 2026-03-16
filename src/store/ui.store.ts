import { create } from "zustand";
import { DialogEnum } from "./types/DialogEnum";

interface IUiState {
  openDialogName: DialogEnum;
  setOpenDialogName: (dialog: DialogEnum) => void;
}

const useUiState = create<IUiState>()((set) => ({
  openDialogName: null,
  setOpenDialogName: (name) => set(() => ({ openDialogName: name })),
}));

export default useUiState;
