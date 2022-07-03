import React from 'react'
import { db } from './FirebaseConfig'
import { doc, deleteDoc } from 'firebase/firestore'
import { async } from '@firebase/util'

const borrarGasto = async (id) => {
    await deleteDoc(doc(db, 'gastos', id))

}

export default borrarGasto;
