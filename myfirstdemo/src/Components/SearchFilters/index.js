import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchFilters = ({onSearch, onSubmitSearch}) => {
    return (
        <div className='table-card'>
            <span style={{ fontSize: '15px', fontFamily: 'font-family: Verdana, sans-serif;' }}>Find a Customer</span>
            <div className="form-group" style={{ 'display': 'flex', marginTop: '10px', fontSize: '15px' }}>
                <label className="col-sm-2 control-label">MTN:</label>
                <div className="col-sm-4">
                    <input name="name" className="form-control" onChange={(e)=>onSearch(e)} />
                </div>
            </div>
            <span style={{ fontWeight: 'normal', marginBottom: '20px' }}>or</span>
            <div className="form-group" style={{ 'display': 'flex', fontSize: '15px' }}>
                <label className="col-sm-2 control-label">Account:</label>
                <div className="col-sm-4" style={{display:'flex'}}>
                    <input name="acount" className="form-control" /> - <input id='ext' name="ext" className="form-control" style={{width:'100px!important'}} />
                </div>
            </div>
            <span style={{ fontWeight: 'normal', marginBottom: '20px', fontSize: '15px' }}>or</span>
            <div className="form-group" style={{ 'display': 'flex' }}>
                <label className="col-sm-2 control-label">Email:</label>
                <div className="col-sm-4">
                    <input name="pass2" id='email-input' className="form-control" />
                </div>
            </div>

            <div className='button-div'>
                <button className='reset-button' />
                <button className='submit-button' onClick={onSubmitSearch}/>
            </div>
        </div>
    );
}
export default SearchFilters;