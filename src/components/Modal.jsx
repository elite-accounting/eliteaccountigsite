import { useEffect } from 'react'

const Modal = ({ isOpen, onClose, title, children, variant = 'default' }) => {
  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`relative z-10 w-full max-w-md overflow-hidden bg-white border-2 shadow-xl transition-all ${
          variant === 'success'
            ? 'border-primary shadow-primary/20'
            : 'border-secondary'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-secondary px-6 py-4">
          <h2 id="modal-title" className="text-xl font-light text-text-primary">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-text-secondary hover:bg-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-5 text-text-secondary font-light leading-relaxed">
          {children}
        </div>
        <div className="border-t border-secondary px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className={`w-full py-3 font-light transition-colors ${
              variant === 'success'
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'bg-secondary text-text-primary hover:bg-gray-200'
            }`}
          >
            {variant === 'success' ? 'Done' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
