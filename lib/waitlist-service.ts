import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export async function addToWaitlist(email: string) {
  try {
    const docRef = await addDoc(collection(db, 'waitlist'), {
      email: email.toLowerCase().trim(),
      createdAt: serverTimestamp(),
      source: "landing_page",
      status: 'pending',
      notified: false
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return { success: false, error }
  }
}