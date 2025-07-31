import BackButton from "./BackButton";
import NextButton from "./NextButton";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function FormTemplate() {
    return (
        <section id="form">
            <button class="form-back-button">
                <span class="left-arrow">←</span>
                Monitoring & References Template Generator
            </button>

            <div class="steps">
                <div>Detail Program Kerja</div>
                <div>Pilih Template</div>
                <div>Membuat Template</div>
                <div>Download Template</div>
            </div>

            <div class="form-contents">
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
            </div>

            <div class="form-buttons">
                <BackButton insertText={"Kembali"} />
                <NextButton insertText={"Lanjutkan"} />
            </div>
        </section>
    );
}

function Page1() {
    const animatedComponents = makeAnimated();
    const divisions = [
        { value: 'acara', label: 'Acara' },
        { value: 'perkap', label: 'Perlengkapan' },
        { value: 'design', label: 'Design & Dokumentasi' },
        { value: 'publikasi', label: 'Publikasi & Sosmed' }
    ];

    return (
        <div>
            <h2>Masukkan informasi seputar program kerja yang akan dilaksanakan</h2>
            <div class="label-container">
                <div class="program-title-container">
                    <label for="program-title">Judul Program Kerja</label>
                    <input
                        id="program-title"
                        name="program-title"
                        type="text"
                        placeholder="Contoh: LDK-CP 2025, BSLC Benchmarking, BSLC Company Visit, ..."
                    />
                </div>
                <div class="division-list-container">
                    <label for="division-list">Daftar Divisi</label>
                    {/* <select id="division-list" name="division-list" multiple>
                        <option value="" disabled selected hidden></option>
                        <option value="acara">Acara</option>
                        <option value="perkap">Perlengkapan</option>
                        <option value="design">Design & Dokumentasi</option>
                        <option value="publikasi">Publikasi & Sosmed</option>
                    </select> */}
                    <Select
                        className="select"
                        unstyled
                        placeholder="Cari divisi-divisi untuk program kerja"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={divisions}
                        styles={{
                            container: (styles, state) => ({
                                ...styles,
                                borderColor: state.isFocused ? '#FCB0B2' : 'gainsboro',
                            }),
                            placeholder: (styles) => ({ ...styles, color: 'gainsboro' }),
                            indicatorsContainer: (styles) => ({ ...styles, margin: '0.5em' }),
                            clearIndicator: (styles, state) => ({
                                ...styles,
                                color: state.isFocused ? '#FA6366' : 'gainsboro',
                                cursor: 'pointer',
                            }),
                            dropdownIndicator: (styles, state) => ({
                                ...styles,
                                color: state.isFocused ? '#FCB0B2' : 'gainsboro',
                                cursor: 'pointer',
                            }),
                            multiValue: (styles) => ({
                                ...styles,
                                margin: '0.25em',
                                padding: '0 0.5em',
                                borderRadius: '10px',
                                backgroundColor: '#FA6366',
                                color: 'white',
                            }),
                            multiValueRemove: (styles) => ({
                                ...styles,
                                margin: '0 0.25em',
                                cursor: 'pointer',
                            }),
                            menu: (styles) => ({
                                ...styles,
                                margin: '0.5em 0 0 -0.5em',
                                padding: '0',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                backgroundColor: 'white',
                                border: '1px solid #FA6366',
                            }),
                            option: (styles, state) => ({
                                ...styles,
                                padding: '0.25em',
                                cursor: 'pointer',
                                backgroundColor: state.isFocused ? '#FCB0B2' : 'white',
                            }), 
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

function Page2() {

}

function Page3() {

}

function Page4() {

}