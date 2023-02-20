import { collection, doc, getDocs, setDoc, query, where, updateDoc, arrayUnion } from "firebase/firestore";
import {db, auth} from "../firebase";
import {
    firestoreLinesCollection,
    firestoreListOfKanjiCollection,
    firestoreListOfKanjiDocId,
    firestoreUsersCollection
} from "../utils/constants";
import {ILine} from "../models/firestore";

export class Jago {

    static async getListOfKanji()  {

        if (!auth.currentUser) return

        const newKanjiList: string[] = []
        const col = collection(db, firestoreUsersCollection, auth.currentUser.uid, firestoreListOfKanjiCollection)
        const snapshot = await getDocs(query(col))
        snapshot.forEach((doc) => {
            newKanjiList.push(...doc.data().listOfKanji)
        })

        return newKanjiList
    }
    static async getLinesByKanji(kanji: string) {

        if (!auth.currentUser) return

        const newLines: ILine[] = []

        const col = collection(db, firestoreUsersCollection, auth.currentUser.uid, firestoreLinesCollection)
        const snapshot = await getDocs(query(col, where('origin', '==', kanji)))
        snapshot.forEach((doc) => {
            newLines.push({
                id: doc.data().id || -1,
                origin: doc.data().origin || '',
                word: doc.data().word || '',
                reading: doc.data().reading || '',
                translation: doc.data().translation || '',
            })
        })

        return newLines
    }

    static async addNewKanji(kanji: string) {

        if (!auth.currentUser) return

        const listOfKanjiDoc = doc(
            db,
            firestoreUsersCollection,
            auth.currentUser.uid,
            firestoreListOfKanjiCollection,
            firestoreListOfKanjiDocId
        )

        await setDoc(listOfKanjiDoc, {
            [firestoreListOfKanjiCollection]: arrayUnion(kanji)
        }, {merge: true})
    }

    static async addLineOrUpdateExisting(line: ILine) {
        if (!auth.currentUser) return

        const col = doc(
            db,
            firestoreUsersCollection,
            auth.currentUser.uid,
            firestoreLinesCollection,
            line.id
        )

        await setDoc(col, line, {merge: true})
    }
}