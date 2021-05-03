import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const types = ['image/png', 'image/jpeg']

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('incorrect file type. choose another.');
    }
  };
  
  return (
  	<form>
      <label>
        <input type="file" onChange={handleChange} />
        <span><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  )
}

export default UploadForm