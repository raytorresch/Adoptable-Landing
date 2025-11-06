import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export async function submitContactForm(data: {
  name: string
  email: string
  message: string
  subject?: string
}) {
  try {
    const docRef = await addDoc(collection(db, 'contact_submissions'), {
      ...data,
      createdAt: serverTimestamp(),
      type: 'general'
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    return { success: false, error }
  }
}