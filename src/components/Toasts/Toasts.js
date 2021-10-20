import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Toasts = (props) => {
    const [toast, setToast] = useState({ display: 'none' })
    const { error, setError } = useAuth();

    useEffect(() => {
        if (error) {
            setToast({ display: 'block' });
            setTimeout(function () {
                setToast({ display: 'none' });
                setError('');
            }, 3000);
        }
    }, [error])

    const handleCloseToast = () => {
        setToast({ display: 'none' })
    }

    return (
        <div style={toast}>
            <div
                style={{
                    position: 'fixed',
                    minHeight: '100px',
                    width: '250px',
                    border: '3px solid lightgray',
                    bottom: '10px',
                    right: '10px',
                    borderRadius: '5px',
                    boxShadow: '0px 0px 5px red',
                    backgroundColor: 'white'
                }}
            >
                <div
                    style={{
                        height: '28px',
                        backgroundColor: 'lightgray',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '4px'
                    }}
                >
                    <div>
                        <h6>Message for You</h6>
                    </div>
                    <div>
                        <button onClick={handleCloseToast} type="button" class="btn-close" aria-label="Close"></button>
                    </div>
                </div>
                {/* toast body */}
                <div style={{ color: 'black', padding: '5px', textAlign: 'center', minHeight: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {error}
                </div>
            </div>
        </div>
    );
};

export default Toasts;