import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function Page1({ formData, onDataChange }) {
    const animatedComponents = makeAnimated();
    const divisionOptions = [
        { value: 'acara', label: 'Acara' },
        { value: 'perkap', label: 'Perlengkapan' },
        { value: 'pubdok', label: 'Publikasi & Dokumentasi' },
        { value: 'design', label: 'Design & Dokumentasi' },
    ];

    const handleTitleChange = (e) => {
        onDataChange({ programTitle: e.target.value });
    };

    const handleDivisionChange = (selectedOptions) => {
        const divisionValues = selectedOptions ? selectedOptions.map(opt => opt.value) : [];
        onDataChange({ divisions: divisionValues });
    };

    const selectedDivisionValues = divisionOptions.filter(opt => 
        formData.divisions.includes(opt.value)
    );

    return (
        <div>
            <h2>Masukkan informasi seputar program kerja yang akan dilaksanakan</h2>
            <div className="label-container">
                <div className="program-title-container">
                    <label htmlFor="program-title">Judul Program Kerja</label>
                    <input
                        id="program-title"
                        name="program-title"
                        type="text"
                        placeholder="Contoh: LDK-CP 2025, BSLC Benchmarking, ..."
                        value={formData.programTitle}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="division-list-container">
                    <label htmlFor="division-list">Daftar Divisi</label>
                    <Select
                        className="select"
                        placeholder="Cari divisi-divisi untuk program kerja"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={divisionOptions}
                        value={selectedDivisionValues}
                        onChange={handleDivisionChange}
                        styles={{
                            container: (styles, state) => ({
                                ...styles,
                                borderColor: state.isFocused ? '#FCB0B2' : 'gainsboro',
                            }),
                            control: (styles, state) => ({
                                ...styles,
                                borderRadius: '10px',
                                border: 'none',
                                boxShadow: 'none',
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