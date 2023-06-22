import React, { useState } from 'react';
import AddProductImg from './AddProductImg';
import ProductInput from './ProductInput';
import { HeaderUploadNav } from '../../components/common/Header/Header';
import axios from 'axios';

export default function ProductPage() {
  return (
    <>
      <HeaderUploadNav />
      <AddProductImg />
      <ProductInput />
    </>
  );
}
