import React from 'react'
import { useModal } from '../context/contextModal';

// function HomePage() {
export function Component() {
  const showModal = useModal();

  const handleClickModal = () => {
    showModal({ 
      title: 'Modal title', 
      description: 'Modal content lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://picsum.photos/800/600',
      
    });
  }
    return (
    <div>
      HomePage

      <button onClick={() => handleClickModal()}>Fetch Data</button>
    </div>
  )
}


if (import.meta.env.DEV) {
  Component.displayName = 'Contact'
}
// export default HomePage