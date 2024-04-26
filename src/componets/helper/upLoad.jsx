import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import img5 from "../../assets/Excel.png";
import { LuUpload } from "react-icons/lu";
import CloseIcon from '@mui/icons-material/Close';

function Uploader() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    { id: 1, col1: '01', col2: 'www.google.com', col3: 'prifixsample', selectedTags: [] },
    { id: 2, col1: '02', col2: 'www.example.com', col3: 'prifixsample', selectedTags: [] },
    { id: 3, col1: '03', col2: 'www.test.com', col3: 'prifixsample', selectedTags: [] },
    { id: 4, col1: '04', col2: 'www.sample.com', col3: 'prifixsample', selectedTags: [] },
    { id: 5, col1: '05', col2: 'www.newwebsite.com', col3: 'prifixsample', selectedTags: [] },
    { id: 6, col1: '06', col2: 'www.anotherwebsite.com', col3: 'prifixsample', selectedTags: [] },
  ]);

  const handleUpload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  };

  const handleTagSelect = (event, rowIndex) => {
    const selectedTag = event.target.value;
    setData(prevData => prevData.map(row => {
      if (row.id === rowIndex) {
        return { ...row, selectedTags: [...row.selectedTags, selectedTag] };
      }
      return row;
    }));
  };

  const handleTagRemove = (rowIndex, tagToRemove) => {
    setData(prevData => prevData.map(row => {
      if (row.id === rowIndex) {
        return { ...row, selectedTags: row.selectedTags.filter(tag => tag !== tagToRemove) };
      }
      return row;
    }));
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const cellStyle = {
    padding: '8px',
    textAlign: 'left',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };

  const rowStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
   
  };

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '-30vh' }}>
        <div style={{ margin: '20px auto', width: '200px' }}>
          <input
            type="file"
            id="upload"
            name="upload"
            accept=".xlsx"
            style={{ display: 'none' }}
          />
          <label htmlFor="upload">
            <div
              style={{
                border: '2px dashed #aaa',
                borderRadius: '5px',
                padding: '10vh',
                cursor: 'pointer',
                width: '40vw',
                height: '35vh',
              }}
            >
              <img src={img5} alt="Excel Icon" /><br />
              Drop your excel sheet here or <a href='#' style={{ color: 'blue' }}>browse</a>
            </div>
          </label>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={loading}
          startIcon={!loading && <LuUpload />}
          style={{ width: '40vw', borderRadius: '10px', backgroundColor: "rgb(96, 91, 255)", marginLeft: '24vw' }}
        >
          {loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : 'Upload'}
        </Button>
      </div>
      <div style={{ marginTop: '15vh', marginLeft: '20vw', marginBottom:'10vh' }}>
        <h4>Uploads</h4>
        <div style={{ backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '8px', overflow: 'auto', marginTop:'8vh' }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Link</th>
                <th>Prefix</th>
                <th>Add Tag</th>
                <th>Selected tags</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} style={rowStyle}>
                  <td style={cellStyle}>{row.col1}</td>
                  <td style={cellStyle}>{row.col2}</td>
                  <td style={cellStyle}>{row.col3}</td>
                  <td style={cellStyle}>
                    <select value={row.col4} onChange={(e) => handleTagSelect(e, row.id)} style={{ backgroundColor: 'white', color: 'black' }}>
                      <option value="">Select Tag</option>
                      <option value="tag1">Tag 1</option>
                      <option value="tag2">Tag 2</option>
                      <option value="tag3">Tag 3</option>
                      <option value="tag4">Tag 4</option>
                    </select>
                  </td>
                  <td style={cellStyle}>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {row.selectedTags.map((tag, idx) => (
                        <div key={idx} style={{ backgroundColor: 'rgb(96, 91, 255)', borderRadius: '3px', padding: '3px', margin: '2px', display: 'flex', alignItems: 'center', color: 'white' }}>
                          <span style={{ marginRight: '4px' }}>{tag}</span>
                          <CloseIcon style={{ cursor: 'pointer' }} onClick={() => handleTagRemove(row.id, tag)} />
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Uploader;
