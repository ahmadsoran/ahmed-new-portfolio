import create from 'zustand'

const useStore = create((set) => ({
    isFixed: false,
    setPosition: (e) => set(() => ({ isFixed: e })),
}))

export default useStore