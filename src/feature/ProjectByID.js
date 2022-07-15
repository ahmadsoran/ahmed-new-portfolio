import create from 'zustand'

const GetProjectById = create((set) => ({
    id: undefined,
    setProjectId: (e) => set(() => ({ id: e })),
}))

export default GetProjectById