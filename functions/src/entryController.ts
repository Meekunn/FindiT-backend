import { Response } from 'express'
import { db } from './config/firebase'

type EntryType = {
    name: string;
    title: string;
    phone: string;
    department: string;
    location: string;
    office: string;
    email: string;
    id: string;
}

type Request = {
    body: EntryType,
    params: {entryId: string}
}

const getAllEntries = async (req: Request, res: Response) => {
    try{
        const allEntries: EntryType [] = []
        const querysnapshot = await db.collection('lecturers').get()
        querysnapshot.forEach((doc:any) => allEntries.push(doc.data()))
        
        return res.status(200).json(allEntries)
    } catch (error: any) {
        return res.status(500).json(error.message)
    }
}

export { getAllEntries }