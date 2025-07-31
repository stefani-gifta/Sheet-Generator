import NextButton from "./NextButton";

function App() {
  return (
    <section id="home">
      <h1>Welcome to<br />Monitoring & References Template Generator</h1>
      <p class="page-description">Cukup masukkan nama acara, daftar divisi, dan pilih template. Sistem akan langsung menyiapkan dokumen siap pakai untukmu!</p>
      <NextButton insertText={"Start Now"}/>
    </section>
  );
}

export default App
