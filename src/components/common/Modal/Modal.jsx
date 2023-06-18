import React, { useState } from 'react';
import styles from './Modal.module.css';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    // 삭제 로직을 구현하고, 삭제가 완료되면 setIsOpen(false)를 호출하여 모달을 닫을 수 있습니다.
    // 여기서는 단순히 삭제 완료를 알리기 위해 console.log만 사용합니다.
    console.log('삭제 완료');
    setIsOpen(false);
  };

  if (!isOpen) {
    // 모달이 닫혔을 때, null을 반환하여 렌더링을 중단합니다.
    return null;
  }

  return (
    <div className={styles.modal}>
      <p>상품을 삭제할까요?</p>
      <div className={styles['button-container']}>
        <button type="submit" onClick={handleCancel}>
          취소
        </button>
        <button type="submit" className={styles.delete} onClick={handleDelete}>
          삭제
        </button>
      </div>
    </div>
  );
}
