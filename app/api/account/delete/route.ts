import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export async function POST(request: Request) {
  try {
    const { email, reason } = await request.json()

    // Guardar solicitud en Firestore
    const docRef = await addDoc(collection(db, 'account_deletion_requests'), {
      email: email.toLowerCase().trim(),
      reason: reason || 'No especificada',
      status: 'pending',
      requestedAt: serverTimestamp(),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    })

    // Aquí podrías integrar con:
    // - Servicio de email para confirmación
    // - Proceso automático de eliminación
    // - Notificación al equipo

    return NextResponse.json({ 
      success: true, 
      id: docRef.id,
      message: 'Deletion request received' 
    })

  } catch (error) {
    console.error('Error processing deletion request:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}