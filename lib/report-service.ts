import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export type IssueType = 'bug' | 'feature' | 'security' | 'ui_ux' | 'performance' | 'other'

export async function submitReport(data: {
  email: string
  issue_type: IssueType
  description: string
  urgency: 'low' | 'medium' | 'high'
  page_url?: string
  browser_info?: string
}) {
  try {
    const docRef = await addDoc(collection(db, 'reports'), {
      ...data,
      createdAt: serverTimestamp(),
      status: 'new',
      userAgent: globalThis.window === undefined ? 'server' : globalThis.window.navigator.userAgent,
      resolved: false
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    return { success: false, error }
  }
}