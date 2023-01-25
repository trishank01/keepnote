import { createContext , useState} from "react";



export const DataContext = createContext(null)


const DataProvider = ({children}) => {
    const [notes , setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])
    const [archiveNotes , setArchiveNotes] = useState(JSON.parse(localStorage.getItem("archive")) || [])
    const [deletedNotes , setDeletedNotes] = useState(JSON.parse(localStorage.getItem("delete")) || [])
// updating
    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setArchiveNotes,
            deletedNotes,
            setDeletedNotes
        }}>
           {children}
        </DataContext.Provider>
    )
}


export default DataProvider