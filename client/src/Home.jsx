import React from 'react';
import NextButton from "./NextButton";

export default function Home({ onClick }) {
    return (
        <section id="home">
            <h1>Welcome to<br />Monitoring & References Template Generator</h1>
            <p className="page-description">Cukup masukkan nama acara, daftar divisi, dan pilih template. Sistem akan langsung menyiapkan dokumen siap pakai untukmu!</p>
            <NextButton insertText={"Start Now"} onClick={onClick} />
        </section>
    );
}