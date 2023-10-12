import React from 'react';
import NotFoundImage from '../../assets/images/404 page.svg';
import { Image, NotFoundText, NotFoundBtn } from './NotFoundStyle';
import Layout from "../../styles/Layout";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <Layout align="center">
            <Image src={NotFoundImage} alt="404페이지 로고" />
            <NotFoundText>페이지를 찾을 수 없음</NotFoundText>
            <NotFoundBtn onClick={handleBack}>이전페이지</NotFoundBtn>
        </Layout>
    );
}
