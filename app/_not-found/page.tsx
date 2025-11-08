import NotFoundContent from './not-found-content'
import { Suspense } from "react";


export default function NotFoundPage() {
  return  (
    <Suspense fallback={null}>
      <NotFoundContent />
    </Suspense>
  )
}
