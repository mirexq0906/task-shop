interface ModalsState {
  activeModal: boolean;
  currentModal: string;
}
export const modalsModule = {
  state(): ModalsState {
    return {
      activeModal: false,
      currentModal: '',
    };
  },
  mutations: {
    openModal(
      state: ModalsState,
      data: { active: boolean; name: string }
    ): void {
      state.activeModal = data.active;
      state.currentModal = data.name;
    },
    closeModal(state: ModalsState): void {
      state.activeModal = false;
    },
  },
  getters: {
    getActiveModal(state: ModalsState): boolean {
      return state.activeModal;
    },
    getCurrentModal(state: ModalsState): string {
      return state.currentModal;
    },
  },
};
